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