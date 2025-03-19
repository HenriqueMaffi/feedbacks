<template>
  <form @submit.prevent="enviaFormularioFeedback" class="flex gap-4 flex-col bg-white p-4 shadow-md xl:p-10 rounded w-full">
    <h3 class="font-semibold text-xl mb-2">Envie-nos seu feedback!</h3>

    <label for="setor-feedback" class="relative">
      Área avaliada
      <select 
        id="setor-feedback" 
        v-model="setorAvaliadoSelecionado" 
        @change="limpaAlertas('setor')"
        class="base-input-feedback"
        :class="{'border-gray-200': !alertaSetorAvaliado, 'border-red-500': alertaSetorAvaliado}"
      >
        <option value="" selected disabled hidden></option>
        <option v-for="setor in Setores" :value="setor">{{ setor }}</option>
      </select>

      <span 
        class="absolute top-0 right-0 text-red-600 text-sm transition-opacity duration-200" 
        :class="{'opacity-0': !alertaSetorAvaliado, 'opacity-100': alertaSetorAvaliado}"
      >
        campo obrigatório
      </span>
    </label>

    <label for="tipo-feedback" class="relative">
      Tipo do feedback
      <select 
        id="tipo-feedback"
        v-model="tipoFeedbackSelecionado" 
        @change="limpaAlertas('tipo')"
        class="base-input-feedback"
        :class="{'border-gray-200': !alertaTipoFeedback, 'border-red-500': alertaTipoFeedback}"
      >
        <option value="" selected disabled hidden></option>
        <option v-for="tipo in Tipos" :value="tipo">{{ tipo }}</option>
      </select>

      <span 
        class="absolute top-0 right-0 text-red-600 text-sm transition-opacity duration-200" 
        :class="{'opacity-0': !alertaTipoFeedback, 'opacity-100': alertaTipoFeedback}"
      >
        campo obrigatório
      </span>
    </label>

    <label for="mensagem-feedback" class="relative">
      Mensagem
      <textarea 
        id="mensagem-feedback" 
        rows="4" 
        maxlength="300" 
        v-model="mensagemFeedback" 
        @input="limpaAlertas('mensagem')"
        class="base-input-feedback resize-none"
        :class="{'border-gray-200': !alertaMensagemFeedback, 'border-red-500': alertaMensagemFeedback}"
      ></textarea>
      <span 
        class="absolute top-0 right-0 text-red-600 text-sm transition-opacity duration-200" 
        :class="{'opacity-0': !alertaMensagemFeedback, 'opacity-100': alertaMensagemFeedback}"
      >
        {{ alertaMensagemFeedback }}
      </span>
    </label>

    <div class="flex flex-col">
      <label for="arquivo-feedback" class="relative">
        Envie um arquivo ou imagem
        <div              
          class="base-input-feedback flex items-center gap-2"
          :class="{'border-gray-200': !alertaArquivoFeedback, 'border-red-500': alertaArquivoFeedback}"
        >
          <Icon name="ph:upload-bold" class="text-fb-300 shrink-0"/>
          <span class="truncate">{{ !arquivoFeedbackEnviado ? 'Nenhum arquivo selecionado' : arquivoFeedbackEnviado.name }}</span>
        </div>
        <input 
          id="arquivo-feedback" 
          type="file" 
          @change="verificaArquivoEnviado" 
          accept=".pdf,.jpeg,.jpg,.png,.webp"
          class="hidden"
        >
        <span 
          class="absolute top-0 right-0 text-red-600 text-sm transition-opacity duration-200" 
          :class="{'opacity-0': !alertaArquivoFeedback, 'opacity-100': alertaArquivoFeedback}"
        >
          {{ alertaArquivoFeedback }}
        </span>
      </label>
    </div>

    <button 
      type="submit" 
      aria-label="Enviar feedback"
      class="px-6 py-2 mt-6 rounded bg-fb-500 shadow-md text-sm text-gray-100 xl:hover:bg-fb-700 transition-colors duration-200"
    >
      Enviar Feedback
    </button>
  </form>
</template>

<script lang="ts" setup>
import { Tipos, Setores } from 'assets/data.json'
import type { Feedback } from '~/types'

const listaFeedback = useFeedbacks()

const setorAvaliadoSelecionado = ref<'Pré-Atendimento' | 'Vendas' | 'Pós-vendas' | 'Produtos' | ''>('')
const tipoFeedbackSelecionado = ref<'' | 'Elogio' | 'Sugestão' | 'Crítica'>('')
const mensagemFeedback = ref('')
const arquivoFeedbackEnviado = ref<null | File>(null)

const alertaSetorAvaliado = ref(false)
const alertaTipoFeedback = ref(false)
const alertaMensagemFeedback = ref('')
const alertaArquivoFeedback = ref('')

const emit = defineEmits(['submit-feedback'])


function verificaArquivoEnviado(event: Event) {
  const target = event.target as HTMLInputElement;
  const arquivoSelecionado = target.files?.[0] as File | null;
  const extensoesPermitidas = /(\.pdf|\.jpeg|\.jpg|\.png|\.webp)$/i;

  if (arquivoSelecionado) {
    if (!extensoesPermitidas.exec(arquivoSelecionado.name)) {
      alertaArquivoFeedback.value = 'Apenas arquivos PDF, JPEG, JPG, PNG e WebP são permitidos.';
      arquivoFeedbackEnviado.value = null;
      target.value = '';
    } else {
      alertaArquivoFeedback.value = '';
      arquivoFeedbackEnviado.value = arquivoSelecionado;
    }
  }
};

function limpaAlertas(tipoInput: string){
  tipoInput === 'setor' ? alertaSetorAvaliado.value = false :
  tipoInput === 'tipo' ? alertaTipoFeedback.value = false :
  tipoInput === 'mensagem' ? alertaMensagemFeedback.value = '' :
  alertaArquivoFeedback.value = ''
}


function validaInputsFeedback(){
  if (!setorAvaliadoSelecionado.value) {
    alertaSetorAvaliado.value = true;
  }
  if (!tipoFeedbackSelecionado.value) {
    alertaTipoFeedback.value = true;
  }
  if (!mensagemFeedback.value) {
    alertaMensagemFeedback.value = 'campo obrigatório';
  } else if (mensagemFeedback.value.length < 10) {
    alertaMensagemFeedback.value = 'digite ao menos 10 caracteres'
  }  
}

function enviaFormularioFeedback(){
  validaInputsFeedback()
  if (!alertaSetorAvaliado.value && !alertaTipoFeedback.value && !alertaMensagemFeedback.value && !alertaArquivoFeedback.value) {
    const novoFeedback: Feedback = {
      id: listaFeedback.value.length + 1,
      data: novaData(),
      status: "Pendente",
      setor: setorAvaliadoSelecionado.value,
      tipo: tipoFeedbackSelecionado.value,
      mensagem: mensagemFeedback.value,
      resposta: '',
      arquivo: arquivoFeedbackEnviado.value

    }
    
    emit('submit-feedback', novoFeedback)
  }
}

function novaData(){
  const data = new Date()

  const dia = String(data.getDate()).padStart(2, '0')
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const ano = data.getFullYear()
  return `${dia}/${mes}/${ano}`
}
</script>

<style scoped>
.base-input-feedback{
  @apply font-normal text-base rounded py-2 px-4 w-full border shadow-sm bg-gray-50 outline-none focus:border-fb-500 transition-colors duration-200
}

</style>