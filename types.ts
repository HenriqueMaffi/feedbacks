export interface Feedback {
  id: number,
  data: string,
  status: string,
  setor: string,
  tipo: string,
  mensagem: string,
  resposta: string,
  arquivo: File | null
}

export interface Filtros {
  status: '' | 'Pendente' | 'Respondido';
  area: '' | 'Pré-Atendimento' | 'Vendas' | 'Pós-vendas' | 'Produtos';
  tipo: '' | 'Elogio' | 'Sugestão' | 'Crítica';
  data: 'Recentes' | 'Antigos';
}