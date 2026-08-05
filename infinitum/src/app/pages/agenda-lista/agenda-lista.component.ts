import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaService } from '../../services/agenda.service';
import { Noticia } from '../../models/agenda.model';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-agenda-lista',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './agenda-lista.component.html'
    
})
export class AgendaListaComponent implements OnInit {
    private agendaService = inject(AgendaService);
    noticias = signal<Noticia[]>([]);
    ngOnInit() {
        this.carregarNoticias();
    }
    carregarNoticias() {
        this.agendaService.getNoticias().subscribe(res =>
            this.noticias.set(res));
    }
}