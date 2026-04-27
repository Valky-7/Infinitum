import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Perfil } from './perfil/perfil';
import { Contato } from './contato/contato';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'perfil', component: Perfil },
    { path: 'contato', component: Contato }
];
