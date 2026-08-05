import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaService } from '../../services/agenda.service';
import { Noticia } from '../../models/agenda.model';

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
    private agendaService = inject(AgendaService);
    noticias = signal<Noticia[]>([]);
  
    ngOnInit() {
        this.atualizarLista();
    }
    atualizarLista() {
        this.agendaService.getNoticias().subscribe(res =>
            this.noticias.set(res));
    }
    remover(id: string | undefined) {
        if (id && confirm('Tem certeza que deseja remover esta notícia do site ? ')) {

 this.agendaService.excluirNoticia(id).subscribe(() => {
 // Atualiza a lista local removendo o item sem precisar de um novo GET(Performance!)
            this.noticias.update(lista => lista.filter(e => e.id !==
                id));
        });
    }
}
}