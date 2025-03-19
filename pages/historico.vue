<template>
  <div class="container mx-auto px-2">
    <div class="flex flex-col bg-gray-100 rounded p-2 my-4">
      <div class="flex flex-row mb-2 sm:px-4 gap-2">
        <HistoricoDropdownFiltro
          v-model="filtros.data"
          :options="dataOptions"
          placeholder="Data"
        />
        <HistoricoDropdownFiltro
          v-model="filtros.status"
          :options="statusOptions"
          placeholder="Status"
        />
        <HistoricoDropdownFiltro
          v-model="filtros.tipo"
          :options="tipoOptions"
          placeholder="Tipo"
        />
        <HistoricoDropdownFiltro
          v-model="filtros.setor"
          :options="setorOptions"
          placeholder="Setor"
        />
      </div>
      <HistoricoLista :lista-feedbacks="listaFeedbackFiltrada" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const listaFeedback = useFeedbacks()

const filtros = ref({
  status: "",
  setor: "",
  tipo: "",
  data: "Recentes", 
});



// Converte a data para YYYY-MM-DD
function formataDataParaFiltro(data: string) {
  const [dia, mes, ano] = data.split('/');
  return `${ano}-${mes}-${dia}`; 
};

const listaFeedbackFiltrada = computed(() => {
  let resultado = listaFeedback.value;

  if (filtros.value.status) {
    resultado = resultado.filter((feedback) => feedback.status === filtros.value.status);
  }

  if (filtros.value.setor) {
    resultado = resultado.filter((feedback) => feedback.setor === filtros.value.setor);
  }

  if (filtros.value.tipo) {
    resultado = resultado.filter((feedback) => feedback.tipo === filtros.value.tipo);
  }

  if (filtros.value.data === "Recentes") {
    resultado = resultado.sort((a, b) => {
      const dateA = formataDataParaFiltro(a.data);
      const dateB = formataDataParaFiltro(b.data);
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });
  } else if (filtros.value.data === "Antigos") {
    resultado = resultado.sort((a, b) => {
      const dateA = formataDataParaFiltro(a.data);
      const dateB = formataDataParaFiltro(b.data);
      return new Date(dateA).getTime() - new Date(dateB).getTime();
    });
  }

  return resultado;
});

const statusOptions = [
  { value: '', label: 'Status' },
  { value: 'Pendente', label: 'Pendente' },
  { value: 'Respondido', label: 'Respondido' },
];

const setorOptions = [
  { value: '', label: 'Setor' },
  { value: 'Pré-atendimento', label: 'Pré-atendimento' },
  { value: 'Vendas', label: 'Vendas' },
  { value: 'Pós-vendas', label: 'Pós-vendas' },
  { value: 'Produtos', label: 'Produtos' },
];

const tipoOptions = [
  { value: '', label: 'Tipo' },
  { value: 'Elogio', label: 'Elogio' },
  { value: 'Sugestão', label: 'Sugestão' },
  { value: 'Crítica', label: 'Crítica' },
];

const dataOptions = [
  { value: 'Recentes', label: 'Recentes' },
  { value: 'Antigos', label: 'Antigos' },
];
</script>
