import { defineStore } from 'pinia'
import { Tipos, Status, Setores } from '~/assets/data.json'

export const useFeedbackStoreStore = defineStore('feedback-store', () => {
  const feedbackList = useFeedbacks()


  const totalFeedbacks = computed(() => feedbackList.value.length)


  const feedbacksPorTipo = computed(() => {
    return Tipos.map(tipo => ({
      tipo,
      total: feedbackList.value.filter(feedback => feedback.tipo === tipo).length
    }))
  });


  const feedbacksPorSetor = computed(() => {
    return Setores.map((setor) => ({
      setor,
      total: feedbackList.value.filter((fb) => fb.setor === setor).length,
    }));
  });


  const feedbacksPorStatus = computed(() => {
    return Status.map((status) => ({
      status,
      total: feedbackList.value.filter((fb) => fb.status === status).length,
    }));
  });


  const setorMaisElogiado = computed(() => {
    const feedbacksElogiados = feedbackList.value.filter((fb) => fb.tipo === "Elogio");

    if (feedbacksElogiados.length === 0) {
      return "Nenhum setor aprovado ainda";
    }
  
    // Cria um objeto para contar as aprovações por setor
    const totalElogiosPorSetor: { [key: string]: number } = {};
  
    feedbacksElogiados.forEach((fb) => {
      if (totalElogiosPorSetor[fb.setor]) {
        totalElogiosPorSetor[fb.setor] += 1;
      } else {
        totalElogiosPorSetor[fb.setor] = 1;
      }
    });
  
    // Encontra o setor com o maior número de aprovações
    let maisElogiado = "";
    let contagemMaxima = 0;
  
    for (const [setor, contagem] of Object.entries(totalElogiosPorSetor)) {
      if (contagem > contagemMaxima) {
        maisElogiado = setor;
        contagemMaxima = contagem;
      }
    }
  
    return maisElogiado;
  });
  

  return {
    totalFeedbacks,
    feedbacksPorTipo,
    feedbacksPorSetor,
    feedbacksPorStatus,
    setorMaisElogiado
  }
})
