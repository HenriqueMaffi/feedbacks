<template>
  <main class="container mx-auto grid place-items-center grid-cols-1 lg:grid-cols-2 grid-rows-auto lg:grid-rows-1 gap-10 lg:gap-20 px-3 pb-10 lg:pb-0">
    <Feedback-enviarTitulo />
    <transition mode="out-in">
      <FeedbackEnviarForm v-if="!envioDoFeedback" @submit-feedback="recebeFeedback"/>
      <FeedbackEnviarFeedbackEnviado v-else @novo-feedback="envioDoFeedback = false" />
    </transition>
  </main>
</template>

<script lang="ts" setup>
import type { Feedback } from '~/types'

const listaFeedback = useFeedbacks()
const envioDoFeedback = ref(false)

function recebeFeedback(feedback: Feedback){
  listaFeedback.value.push(feedback)
  envioDoFeedback.value = true;
}


</script>

<style>
.gradient-bg{
  background: linear-gradient(160deg, #24b2eb 10%, #053D54 100%);
}
</style>