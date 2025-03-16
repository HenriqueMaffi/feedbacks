<template>
  <div class="container mx-auto px-2">
    <div class="flex flex-col bg-gray-100 p-2 mt-4">
      <div class="flex flex-row mb-2 px-4">
        <span class="nome-coluna">Data</span>
        <span class="nome-coluna">Status</span>
        <span class="nome-coluna">Tipo</span>
        <span class="nome-coluna">Área</span>
      </div>
      <main class="flex flex-col">
        <div 
          v-for="feedback in listaFeedback" 
          :key="feedback.id" 
          class="grid grid-cols-4 py-2 px-1 sm:px-4 items-center border-t border-zinc-300 max-[380px]:text-xs text-sm sm:text-base transition-colors duration-200 hover:bg-zinc-300 cursor-pointer"
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
          <span class="w-full truncate">{{ feedback.area }}</span>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
const listaFeedback = useFeedbacks()

</script>

<style scoped>
.nome-coluna{
  @apply font-semibold text-xs uppercase w-1/4
}
</style>