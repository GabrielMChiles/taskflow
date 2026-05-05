import { Routes } from '@angular/router';
import { TarefaForm } from './pages/tarefa-form/tarefa-form';
import { TarefaList } from './pages/tarefa-list/tarefa-list';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: Dashboard },
  {path: 'tarefa', component: TarefaList},
  {path: 'tarefa/cadastrar', component: TarefaForm},
  {path: 'tarefa/editar/:id', component: TarefaForm},
  {path: 'tarefa/:id', component: Dashboard},
  
];
