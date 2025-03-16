<template>
  <div class="h-12 bg-gray-100 border-b shadow-sm w-full fixed top-0 flex gap-32 items-center justify-end px-20">
    <NuxtLink to="/" class="nav-link">Dashboard</NuxtLink>
    <NuxtLink to="/historico" class="nav-link">Histórico</NuxtLink>
    <NuxtLink to="/feedbacks" class="nav-link">Enviar Feedback</NuxtLink>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  .nav-link {
    @apply text-lg tracking-wide border-b border-transparent transition-colors duration-300 font-roboto font-light
  }
  .nav-link.router-link-active{
  @apply border-sky-600
}
</style>