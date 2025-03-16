<template>
  <div class="container mx-auto grid place-items-center grid-cols-1 lg:grid-cols-2 grid-rows-auto lg:grid-rows-1 gap-10 lg:gap-20 px-3 pb-10 lg:pb-0">
    <hgroup class="mt-10">
      <h1 class="text-2xl lg:text-5xl font-semibold">Sua opinião faz a diferença!</h1>
      <p class=" text-lg lg:text-2xl mt-6">Aqui na Feedbacker, valorizamos cada feedback para melhorar nossos produtos e serviços. Dedique um minuto para nos contar sua experiência e nos ajudar a crescer juntos. </p>
    </hgroup>
    <form @submit.prevent="validaInputs" class="flex gap-4 flex-col bg-gray-100 p-4 xl:p-10 rounded w-full">
      <h3 class="font-semibold text-xl mb-2">Envie-nos seu feedback!</h3>

      <label for="area-feedback" class="relative">
        Área avaliada
        <select 
          id="area-feedback" 
          v-model="areaAvaliadaSelecionada" 
          @change="limpaAlerta('area')"
          class="base-input-feedback"
          :class="{'border-gray-200': !alertaAreaAvaliada, 'border-red-500': alertaAreaAvaliada}"
        >
          <option value="" selected disabled hidden></option>
          <option v-for="area, nomeArea in Areas" :value="area">{{ nomeArea }}</option>
        </select>

        <span 
          class="absolute top-0 right-0 text-red-600 text-sm transition-opacity duration-200" 
          :class="{'opacity-0': !alertaAreaAvaliada, 'opacity-100': alertaAreaAvaliada}"
        >
          campo obrigatório
        </span>
      </label>

      <label for="tipo-feedback" class="relative">
        Tipo do feedback
        <select 
          id="tipo-feedback"
          v-model="tipoFeedbackSelecionado" 
          @change="limpaAlerta('tipo')"
          class="base-input-feedback"
          :class="{'border-gray-200': !alertaTipoFeedback, 'border-red-500': alertaTipoFeedback}"
        >
          <option value="" selected disabled hidden></option>
          <option v-for="tipo, nomeTipo in Tipos" :value="tipo">{{ nomeTipo }}</option>
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
          @input="limpaAlerta('mensagem')"
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
        <label for="arquivo-feedback">
          Envie um arquivo ou imagem
          <div              
            class="base-input-feedback flex items-center gap-2"
            :class="{'border-gray-200': !alertaArquivoFeedback, 'border-red-500': alertaArquivoFeedback}"
          >
            <Icon name="ph:upload-bold" class="text-sky-600 shrink-0"/>
            <span class="truncate">{{ !arquivoFeedbackEnviado ? 'Nenhum arquivo selecionado' : arquivoFeedbackEnviado.name }}</span>
          </div>
          <input 
            id="arquivo-feedback" 
            type="file" 
            @change="verificaArquivoEnviado" 
            accept=".pdf,.jpeg,.jpg,.png,.webp"
            class="hidden"
          >
        </label>
      </div>

      <button 
        type="submit" 
        class="px-6 py-2 mt-6 rounded bg-sky-500 shadow-md text-sm text-gray-100 xl:hover:bg-sky-400 transition-colors duration-200"
      >
        Enviar Feedback
      </button>
    </form>
  </div>
</template>

<script setup>
  import {Tipos, Areas} from 'assets/data.json'

  const areaAvaliadaSelecionada = ref('')
  const tipoFeedbackSelecionado = ref('')
  const mensagemFeedback = ref('')
  const arquivoFeedbackEnviado = ref(null)

  const alertaAreaAvaliada = ref(false)
  const alertaTipoFeedback = ref(false)
  const alertaMensagemFeedback = ref(false)
  const alertaArquivoFeedback = ref('')


  function verificaArquivoEnviado(event) {
    const arquivoSelecionado = event.target.files[0];
    const extensoesPermitidas = /(\.pdf|\.jpeg|\.jpg|\.png|\.webp)$/i;

    if (arquivoSelecionado) {
      if (!extensoesPermitidas.exec(arquivoSelecionado.name)) {
        alertaArquivoFeedback.value = 'Apenas arquivos PDF, JPEG, JPG, PNG e WebP são permitidos.';
        arquivoFeedbackEnviado.value = null;
        event.target.value = '';
      } else {
        alertaArquivoFeedback.value = '';
        arquivoFeedbackEnviado.value = arquivoSelecionado;
      }
    }
  };

  function limpaAlerta(tipoInput){
    tipoInput === 'area' ? alertaAreaAvaliada.value = false :
    tipoInput === 'tipo' ? alertaTipoFeedback.value = false :
    tipoInput === 'mensagem' ? alertaMensagemFeedback.value = false :
    alertaArquivoFeedback.value = ''
  }


  function validaInputs(){
    if (!areaAvaliadaSelecionada.value) {
      alertaAreaAvaliada.value = true;
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

</script>

<style scoped>
.base-input-feedback{
  @apply font-normal text-base rounded py-2 px-4 w-full border shadow-sm bg-gray-50 outline-none focus:border-sky-500 transition-colors duration-200
}
</style>
