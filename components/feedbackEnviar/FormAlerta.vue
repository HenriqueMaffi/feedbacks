<template>
  <span 
    class="absolute top-0 right-0 text-red-600 text-sm transition-opacity duration-200"
    :class="{ 'opacity-0': !alerta, 'opacity-100': alerta }"
  >
    {{ alerta }}
  </span>
</template>

<script lang="ts" setup>
defineProps<{
  alerta: string
}>()
</script>
