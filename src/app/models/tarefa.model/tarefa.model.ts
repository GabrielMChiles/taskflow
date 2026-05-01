export interface Tarefa {
 id: number;
 titulo: string;
 descricao: string;
 categoria: string; // "Trabalho" | "Pessoal" | "Estudos" | "Outros"
 prioridade: string; // "Alta" | "Média" | "Baixa"
 concluida: boolean;
 dataCriacao: Date;
 dataConclusao?: Date; // opcional
}

export const CATEGORIAS = [
 "Trabalho",
 "Pessoal",
 "Estudos",
 "Outros"
];

export const PRIORIDADES = [
 "Alta",
 "Média",
 "Baixa"
];