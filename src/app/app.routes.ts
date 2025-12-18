import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Biblioteca } from './biblioteca/biblioteca.component';
import { Description } from './description/description.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'biblioteca', component: Biblioteca },
  { path: 'description', component: Description},
  { path: '**', redirectTo: 'home' }
];
