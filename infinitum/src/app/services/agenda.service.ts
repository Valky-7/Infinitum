import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs' ;

import { Noticia, Categoria } from '../models/agenda.model';

@Injectable ({ providedIn: 'root' })

export class AgendaService {

    private http = inject(HttpClient);

    private readonly URL_NOTICIAS = 'http://localhost:3000/noticias';
    private readonly URL_CATEGORIAS = 'http://localhost:3000/categorias';

    getNoticias(): Observable<Noticia[]> {

        return this.http.get<Noticia[]>(this.URL_NOTICIAS);
    }

    getCategorias(): Observable<Categoria[]> {

        return this.http.get<Categoria[]>(this.URL_CATEGORIAS);
    }

    salvarNoticia(noticia: Noticia): Observable<Noticia> {

        return this.http.post<Noticia>(this.URL_NOTICIAS, noticia);
    }

    excluirNoticia(id: string): Observable<void> {

        return this.http.delete<void>(`${this.URL_NOTICIAS}/${id}`);

    }
}