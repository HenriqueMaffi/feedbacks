<template>
  <div class="h-12 bg-gray-100 border-b shadow-sm w-full fixed top-auto bottom-0 lg:top-0 lg:bottom-auto z-10 flex items-center justify-center lg:justify-between lg:px-20 lg:gap-20 border-t xl:border-none">
    <NuxtLink to="/" class="font-lato font-bold text-3xl hidden lg:block text-fb-900" aria-label="Dashboard de Estatísticas">feedbacker</NuxtLink>
    <nav class="flex items-center justify-evenly lg:justify-end lg:gap-20 w-full">
      <NuxtLink to="/" class="font-lato font-bold text-[20px] leading-4 lg:hidden text-fb-900 flex flex-col " title="Feedbacker" aria-label="Dashboard de Estatísticas">
        <span>feed</span>
        <span>backer</span>
      </NuxtLink>
      <NuxtLink to="/" class="nav-link" aria-label="Dashboard de Estatísticas">
        <Icon name="ph:squares-four-light" size="22px" class="lg:hidden"/>        
        <span>Dashboard</span>
      </NuxtLink>
      <NuxtLink to="/historico" class="nav-link" aria-label="Histórico de Feedbacks">
        <Icon name="ph:file-search-light" size="22px" class="lg:hidden"/>        
        <span>Histórico</span>
      </NuxtLink>
      <NuxtLink to="/feedbacks" class="nav-link" aria-label="Formulário para enviar Feedback">
        <Icon name="ph:chats-light" size="22px" class="lg:hidden" />        
        <span class="lg:hidden">Feedback</span>
        <span class="hidden lg:inline">Enviar Feedback</span>
      </NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
  .nav-link {
    @apply flex flex-col items-center px-3 py-0.5 text-xs lg:text-lg tracking-wide font-raleway font-light border-2 border-transparent transition-colors duration-300 hover:rounded hover:border-fb-500
  }
  .nav-link.router-link-active {
  @apply border-b-fb-500 
}
</style>