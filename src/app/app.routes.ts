import { Routes } from '@angular/router';
import { TarefaForm } from './pages/tarefa-form/tarefa-form';
import { TarefaList } from './pages/tarefa-list/tarefa-list';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {path: '', redirectTo: '/tarefas', pathMatch: 'full'},
  {path: 'tarefa', component: TarefaList},
  {path: 'tarefa/cadastrar', component: TarefaForm},
  {path: 'produto/editar/:id', component: TarefaForm},
  {path: 'produto/:id', component: Dashboard},
];
