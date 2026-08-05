import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Perfil } from './perfil/perfil';
import { Contato } from './contato/contato';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'perfil', component: Perfil },
    { path: 'contato', component: Contato },
    { path: '', loadComponent: () => import('./pages/agenda-lista/agenda-lista.component').then(m => m.AgendaListaComponent)},
    { path: 'nova-noticia', loadComponent: () => import('./pages/agenda-form/agenda-form.component').then (m => m.AgendaFormComponent)},
    { path: 'admin', loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent)}

];
