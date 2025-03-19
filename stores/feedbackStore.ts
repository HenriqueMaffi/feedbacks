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


  const verificaSetorMaisComumPorTipo = (tipo: string) => {
    // Filtra os feedbacks pelo tipo
    const feedbacksFiltrados = feedbackList.value.filter((fb) => fb.tipo === tipo);

    // Cria um objeto para contar as aprovações por setor
    const contagemSetor: { [key: string]: number } = {};

    // Conta a quantidade de feedbacks por setor
    feedbacksFiltrados.forEach((fb) => {
      if (contagemSetor[fb.setor]) {
        contagemSetor[fb.setor] += 1;
      } else {
        contagemSetor[fb.setor] = 1;
      }
    });

    let setorMaisComum = "";
    let contagemMaxima = 0;

    // Encontra o setor mais comum
    for (const [setor, contagem] of Object.entries(contagemSetor)) {
      if (contagem > contagemMaxima) {
        setorMaisComum = setor;
        contagemMaxima = contagem;
      }
    }

    return setorMaisComum;
  };

  const setorMaisElogiado = computed(() => verificaSetorMaisComumPorTipo("Elogio"));

  const setorMaisCriticado = computed(() => verificaSetorMaisComumPorTipo("Crítica"));

  const setorMaisSugerido = computed(() => verificaSetorMaisComumPorTipo("Sugestão"));

  return {
    totalFeedbacks,
    feedbacksPorTipo,
    feedbacksPorSetor,
    feedbacksPorStatus,
    setorMaisElogiado,
    setorMaisCriticado,
    setorMaisSugerido,
  }
})
