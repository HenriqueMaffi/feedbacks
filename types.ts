export interface Feedback {
  id: number,
  data: string,
  status: 'Pendente' | 'Respondido' | '',
  setor: 'Pré-Atendimento' | 'Vendas' | 'Pós-vendas' | 'Produtos' | '',
  tipo: 'Elogio' | 'Sugestão' | 'Crítica' | '',
  mensagem: string,
  resposta: string,
  arquivo: File | null
}

export interface Filtros {
  status: '' | 'Pendente' | 'Respondido';
  area: '' | 'Pré-Atendimento' | 'Vendas' | 'Pós-vendas' | 'Produtos';
  tipo: '' | 'Elogio' | 'Sugestão' | 'Crítica';
  sortByDate: 'Recentes' | 'Antigos';
}