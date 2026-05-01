import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model/tarefa.model';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {

  private tarefas: Tarefa[] = [];
  private proximoId = 6;

  constructor() {
    // Adiciona tarefas teste
    this.tarefas = 
    [
      {
      id: 1,
      titulo: "Estudar Angular",
      descricao: "Revisar material de Data Binding",
      categoria: "Estudos",
      prioridade: "Alta",
      concluida: false,
      dataCriacao: new Date("2024-04-20")
      },
      {
      id: 2,
      titulo: "Fazer compras",
      descricao: "Arroz, feijão, café",
      categoria: "Pessoal",
      prioridade: "Média",
      concluida: true,
      dataCriacao: new Date("2024-04-21"),
      dataConclusao: new Date("2024-04-22")
      },
      {
      id: 3,
      titulo: "Reunião com time",
      descricao: "Daily às 10h",
      categoria: "Trabalho",
      prioridade: "Alta",
      concluida: false,
      dataCriacao: new Date("2024-04-23")
      },
      {
      id: 4,
      titulo: "Ler documentação TypeScript",
      descricao: "Capítulos 5 e 6",
      categoria: "Estudos",
      prioridade: "Baixa",
      concluida: false,
      dataCriacao: new Date("2024-04-24")
      },
      {
      id: 5,
      titulo: "Ligar para dentista",
      descricao: "Agendar consulta",
      categoria: "Pessoal",
      prioridade: "Média",
      concluida: false,
      dataCriacao: new Date("2024-04-25")
      }
    ];
  }

  cadastarTarefa(tarefa: Tarefa): Tarefa {
    const novaTarefa: Tarefa = {
      ...tarefa,
      id: this.proximoId++
    };

    this.tarefas.push(novaTarefa);

    return novaTarefa;
  }

  listarTarefas(): Tarefa[] {
    return this.tarefas;
  }

  buscarTarefaPorId(id: number): Tarefa | undefined {
    // Busca com lambda, t desde que id de t for igual a id
    return this.tarefas.find(t => t.id === id);
  }

  atualizarTarefa(id: number, tarefaAtualizada: Tarefa): Tarefa | undefined {
    // Busca o index ou id da tarefa
    const index = this.tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tarefas[index] = { ...tarefaAtualizada, id };
      return this.tarefas[index];
    }
    return undefined;
  }

  excluirTarefa(id: number): boolean {
    const index = this.tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tarefas.splice(index, 1);
      return true;
    }
    return false;
  }
}