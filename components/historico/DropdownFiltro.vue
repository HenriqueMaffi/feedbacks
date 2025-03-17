<template>
  <div class="relative inline-block w-full" >
    <div class="dropdown-header cursor-pointer flex justify-between items-center max-[380px]:text-[11px] text-xs xl:text-sm font-semibold uppercase w-full min-w-10 lg:w-60 truncate" @click="toggleDropdown">
      {{ labelSelecionada || placeholder }}
      <span class="text-[12px]">{{ dropdownAberto ? '▲' : '▼' }}</span>
    </div>
    <ul 
      v-if="dropdownAberto" 
      class="absolute top-full border bg-white z-10 min-w-fit xl:max-w-[240px]"
      :class="[placeholder === 'Setor' ? 'right-0 md:left-0' : 'left-0 right-0']"
    >
      <li
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="p-2 cursor-pointer hover:bg-gray-100"        
        :class="{ 'bg-zinc-200': option.value === modelValue }"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface DropdownOption {
  value: string;
  label: string;
}

const props = defineProps<{
  modelValue: string;
  options: DropdownOption[];
  placeholder?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const dropdownAberto = ref(false);

const labelSelecionada = computed(() => {
  const optionSelecionada = props.options.find((option) => option.value === props.modelValue);
  return optionSelecionada ? optionSelecionada.label : '';
});

const toggleDropdown = () => {
  dropdownAberto.value = !dropdownAberto.value;
};

const selectOption = (option: DropdownOption) => {
  emit('update:modelValue', option.value);
  dropdownAberto.value = false;
};
</script>
