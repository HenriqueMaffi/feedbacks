<template>
  <div class="relative inline-block w-full" >
    <div 
      @click="toggleDropdown"
      class="dropdown-header cursor-pointer flex justify-between items-center max-[380px]:text-[11px] rounded text-xs xl:text-sm font-semibold uppercase w-full min-w-10 lg:w-60 truncate" 
    >
      {{ labelSelecionada || placeholder }}
      <span class="text-[12px] transition-transform duration-300" :class="{'rotate-180': dropdownAberto}">
        <Icon name="ph:caret-down" size="18px" class="block" />
      </span>
    </div>
    <ul 
      v-if="dropdownAberto" 
      class="absolute top-full border bg-white z-10 min-w-fit xl:max-w-[240px] rounded-md shadow-md overflow-hidden"
      :class="[placeholder === 'Setor' ? 'right-0 md:left-0' : 'left-0 right-0']"
    >
      <li
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="p-2 cursor-pointer hover:bg-fb-100 hover:text-black"        
        :class="{ 'bg-fb-500 text-gray-100': option.value === modelValue }"
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
