<template>
  <div class="xl:container mx-auto px-2 py-4">
    <div class="w-full h-full rounded bg-gray-200 lg:mt-4 p-4 lg:p-8">
      <h1 class="text-2xl sm:text-3xl font-bold  mb-8 flex items-center">
        <Icon name="ph:squares-four" size="32px" class="mr-2 text-fb-500" />
        Feedback Dashboard
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardDashItem>
          <h2 class="text-xl font-[700] text-gray-700 mb-4 flex items-center">
            Total de Feedbacks
          </h2>
          <p class="text-3xl font-bold text-fb-500">{{ feedbacksStore.totalFeedbacks }}</p>
          <Icon name="ph:handshake" size="32px" class="text-emerald-500 absolute bottom-4 sm:bottom-6 right-4 sm:right-6" />
        </DashboardDashItem>

        <DashboardDashItem>
          <div v-for="fb in feedbacksStore.feedbacksPorStatus" :key="fb.status" class="text-gray-600 mb-2 flex items-center">
            <Icon :name="fb.status === 'Pendente' ? 'ph:x-bold' : 'ph:check-bold'" size="32px" class="mr-2" :class="fb.status === 'Pendente' ? 'text-red-500' : 'text-emerald-600'"/>
            <span class="text-2xl font-semibold mr-2" :class="fb.status === 'Pendente' ? 'text-red-500' : 'text-emerald-600'">{{ fb.total }}</span>
            <span class="text-lg sm:text-xl">Feedbacks {{ fb.status }}s</span> 
          </div>
        </DashboardDashItem>


        <DashboardDashItem>
          <p class="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-4">Setor campeão de elogios: </p>
          <p class="text-2xl font-bold text-green-600">{{ feedbacksStore.setorMaisElogiado }}</p>
          <Icon name="ph:trophy-bold" size="32px" class="text-emerald-500 absolute bottom-4 sm:bottom-6 right-4 sm:right-6" />
        </DashboardDashItem>

        <DashboardDashItem>
          <p class="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-4">Setor com maior nº de sugestões: </p>
          <p class="text-2xl font-bold text-yellow-600">{{ feedbacksStore.setorMaisSugerido }}</p>
          <Icon name="ph:lightbulb-bold" size="32px" class="text-yellow-500 absolute bottom-4 right-4" />
        </DashboardDashItem>
        <DashboardDashItem>
          <p class="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-4">Setor mais criticado: </p>
          <p class="text-2xl font-bold text-red-600">{{ feedbacksStore.setorMaisCriticado }}</p>
          <Icon name="ph:thumbs-down-bold" size="32px" class="text-red-500 absolute bottom-4 right-4" />
        </DashboardDashItem>

        <DashboardDashItem>
          <h2 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Feedbacks por Tipo</h2>
          <ul class="flex flex-wrap gap-x-4 lg:gap-x-6">
            <li v-for="fb in feedbacksStore.feedbacksPorTipo" :key="fb.tipo" class="text-gray-600 mb-2">
              <span>{{ fb.tipo }}: </span>
              <span class="font-bold">{{ fb.total }}</span>
            </li>
          </ul>
        </DashboardDashItem>

        <DashboardDashItem>
          <h2 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Feedbacks por Setor</h2>
          <ul class="grid grid-cols-2 gap-x-4 lg:gap-x-6">
            <li v-for="fb in feedbacksStore.feedbacksPorSetor" :key="fb.setor" class="text-gray-600 mb-2">
              <span>{{ fb.setor }}: </span> 
              <span class="font-bold">{{ fb.total }}</span>
            </li>
          </ul>
        </DashboardDashItem>

      </div>
    </div>
  </div>
</template>

<script setup>
  import { DashboardDashItem } from '#components';
import { useFeedbackStoreStore } from '~/stores/feedbackStore'
  const feedbacksStore = useFeedbackStoreStore()
</script>

<style scoped>
  .container-dados {
    @apply p-4 sm:p-6 rounded-xl shadow-md bg-gray-100 relative
  }
</style>
