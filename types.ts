export interface Feedback {
  id: number,
  data: string,
  status: string,
  area: string,
  tipo: string,
  mensagem: string,
  resposta: string,
  arquivo: File | null
}