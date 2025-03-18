<template>
  <nav class="h-12 bg-gray-100 border-b shadow-sm w-full fixed top-auto bottom-0 lg:top-0 lg:bottom-auto z-10 flex items-center justify-evenly lg:justify-end lg:px-20 lg:gap-20 border-t xl:border-none">
    <NuxtLink to="/" class="nav-link">
      <Icon name="ph:squares-four-light" size="22px" class="lg:hidden"/>        
      <span>Dashboard</span>
    </NuxtLink>
    <NuxtLink to="/historico" class="nav-link">
      <Icon name="ph:file-search-light" size="22px" class="lg:hidden"/>        
      <span>Histórico</span>
    </NuxtLink>
    <NuxtLink to="/feedbacks" class="nav-link">
      <Icon name="ph:chats-light" size="22px" class="lg:hidden" />        
      <span class="lg:hidden">Feedback</span>
      <span class="hidden lg:inline">Enviar Feedback</span>
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  .nav-link {
    @apply flex flex-col items-center text-xs lg:text-lg tracking-wide border-b-2 border-transparent transition-colors duration-300 font-roboto font-light
  }
  .nav-link.router-link-active{
  @apply border-fb-500
}
</style>