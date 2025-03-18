<template>
  <main class="flex flex-col">
    <div 
      v-for="feedback in listaFeedbacks" 
      :key="feedback.id"
      @click="feedbackSelecionado = feedback"
      class="grid grid-cols-4 py-2 px-1 sm:px-4 items-center border-t border-zinc-300 max-[380px]:text-xs text-sm sm:text-base transition-colors duration-200 hover:bg-fb-100 cursor-pointer"
      :class="{ 'bg-fb-100': feedbackSelecionado === feedback }"
    >
      <span class="w-full truncate">{{ feedback.data }}</span>

      <span 
        class="text-zinc-600 flex" 
        :class="{'text-green-700': feedback.status === 'Respondido'}"
      >
        <Icon 
          :name="feedback.status === 'Respondido' ? 'ph:check-bold' : 'ph:x-bold'" 
          size="20px" 
        />
      </span>

      <span 
        class="w-[65px] sm:w-[80px] rounded-full text-xs sm:text-sm text-center px-1 py-0.5 font-semibold" 
        :class="{
          'bg-green-100 text-green-900': feedback.tipo === 'Elogio',
          'bg-gray-200 text-gray-700': feedback.tipo === 'Sugestão',
          'bg-red-100 text-red-900': feedback.tipo === 'Crítica'
        }"
      >
        {{ feedback.tipo }}
      </span>
      <span class="w-full truncate">{{ feedback.setor }}</span>
    </div>
    <teleport to="body">
      <transition :name="isMobile ? 'slide-up' : 'slide-right'" mode="out-in">
        <HistoricoDetalhesFeedback v-if="feedbackSelecionado" :feedback="feedbackSelecionado" @fechar="feedbackSelecionado = null" />
      </transition>
      <transition>
        <HistoricoOverlay v-if="feedbackSelecionado" @fechar="feedbackSelecionado = null" />
      </transition>
    </teleport>
  </main>
</template>

<script lang="ts" setup>
import type { Feedback } from '~/types'
defineProps({
  listaFeedbacks: Array as PropType<Feedback[]>
})

const isMobile = ref(false)

const feedbackSelecionado = ref<Feedback | null>(null)

onMounted(() => {
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      isMobile.value = true
    } else {
      isMobile.value = false
    }
  });
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      isMobile.value = true
    } else {
      isMobile.value = false
    }
  });
})
</script>
