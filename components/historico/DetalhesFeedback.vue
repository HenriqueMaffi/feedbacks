<template>
  <div class="bg-white h-[550px] lg:h-[70%] w-full max-w-[450px] p-4 rounded-t-xl lg:rounded-b-xl absolute bottom-0 lg:top-1/2 lg:right-2 lg:-translate-y-1/2 z-30">

    <div class="grid grid-cols-3 items-center mb-10">
      <span  
        :class="{
          ' text-green-700': feedback.tipo === 'Elogio',
          ' text-gray-700': feedback.tipo === 'Sugestão',
          ' text-red-700': feedback.tipo === 'Crítica'
        }"
      >
        <Icon :name="iconeTipo" size="24px" class="block"/>
      </span>
      <h2 
        class=" col-start-2 place-self-center uppercase text-base text-center font-semibold border-t-2 w-full pt-1 tracking-wide"
        :class="{
          ' border-green-700': feedback.tipo === 'Elogio',
          ' border-gray-700': feedback.tipo === 'Sugestão',
          ' border-red-700': feedback.tipo === 'Crítica'
        }"
      >
        {{ feedback.tipo }}
      </h2>
      <button @click="$emit('fechar')" type="button" class="font-semibold text-gray-500 hover:bg-gray-200 rounded-full p-1 place-self-end transition-colors duration-200">
        <Icon name="ph:x-bold" size="24px" class="block"/>
      </button>
    </div>

    <div class="item-lista border-b">
      <p class="text-sm font-semibold">Data</p>
      <p class="text-sm">{{ feedback.data }}</p>
    </div>
    <div class="item-lista pt-3">
      <p class="text-sm font-semibold">Setor</p>
      <p class="text-sm">{{ feedback.setor }}</p>
    </div>
    <div class="mt-4 p-4 rounded-lg bg-gray-200 flex justify-between gap-4">
      <span class="">
        <Icon name="ph:chat-circle" size="24px" class="block"/>
      </span>
      <p class="text-sm">{{ feedback.mensagem }}</p>
    </div>

    <transition mode="out-in">
      <div v-if="feedback.resposta && !respostaInputEtapa" class="mt-8 p-4 rounded-lg bg-gray-200 flex justify-between gap-4">
        <p class="text-sm">{{ feedback.resposta }}</p>
        <span class="">
          <Icon name="ph:chats-circle" size="24px" class="block"/>
        </span>
      </div>
      <button
        type="button"
        v-else-if="!feedback.resposta && !respostaInputEtapa" 
        @click="respostaInputEtapa = 'edicao'"
        class="flex gap-4 items-center justify-center mt-8 w-full rounded-lg hover:bg-sky-300 hover:shadow-md px-4 py-3 transition-[background-color_shadow] duration-200"
      >
        <Icon name="ph:pencil" size="24px" class="block"/>
        Escrever resposta
      </button>
  
      <form 
        v-else-if="respostaInputEtapa === 'edicao'" 
        @submit.prevent="enviaRespostaAoFeedback" 
        class="mt-8 py-5 px-4 rounded-lg bg-gray-200 flex flex-col gap-4 relative"
      >
        <textarea 
          type="text" 
          v-model="feedback.resposta" 
          @input="alertaRespostaFeedback = ''"
          placeholder="Escreva a resposta ao feedback" 
          rows="4" 
          class="w-full p-2 border rounded-lg text-sm outline-none resize-none transition-colors duration-200 focus:border-sky-500"
          :class="{'border-red-500': alertaRespostaFeedback}"
        ></textarea>
        <button type="submit" class="flex gap-4 items-center justify-center w-full rounded-lg hover:bg-sky-300 hover:shadow-md px-4 py-3 transition-[background-color_shadow] duration-200">
          <Icon name="ph:upload-simple" size="24px" class="block"/>
          Enviar resposta
        </button>
        <span 
          class="absolute top-0.5 right-4 text-red-600 text-sm transition-opacity duration-200" 
          :class="{'opacity-0': !alertaRespostaFeedback, 'opacity-100': alertaRespostaFeedback}"
        >
          {{ alertaRespostaFeedback }}
        </span>
      </form>
      <div v-else-if="respostaInputEtapa === 'sucesso'" class="mt-8 p-4 rounded-lg bg-green-200 flex justify-between gap-4">
        <Icon name="ph:check-bold" size="24px" class="block text-green-800"/>
        Resposta enviada com sucesso!
      </div>
    </transition>

  </div>  
</template>

<script lang="ts" setup>
import type { Feedback } from '~/types'
const props = defineProps<{
  feedback: Feedback
}>()

const respostaInputEtapa = ref('')
const alertaRespostaFeedback = ref('')

const iconeTipo = computed(() => {
  switch (props.feedback.tipo) {
    case 'Elogio':
      return 'ph:thumbs-up'
    case 'Sugestão':
      return 'ph:handshake'
    case 'Crítica':
      return 'ph:thumbs-down'
  }
})

function enviaRespostaAoFeedback() {
  if (!props.feedback.resposta.length) {
    alertaRespostaFeedback.value = 'campo obrigatório'
  } else if(props.feedback.resposta.length < 10) {
    alertaRespostaFeedback.value = 'digite ao menos 10 caracteres'
  } else {
    alertaRespostaFeedback.value = ''
    props.feedback.status = 'Respondido'
    respostaInputEtapa.value = 'sucesso'
    setTimeout(() => {
      respostaInputEtapa.value = ''
    }, 2000)
  }
}
</script>

<style scoped>
.item-lista {
  @apply flex flex-row items-center justify-between gap-2 pb-3
}
</style>