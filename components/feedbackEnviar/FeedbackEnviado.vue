<template>
  <div class="p-8 bg-white rounded shadow-md">
    <h3 class="text-2xl font-semibold mb-4">Feedback enviado!</h3>
    <p>Sua mensagem foi enviada ao time responsável e você receberá uma resposta em breve.</p>
    <p>Agradecemos sua participação!</p>
    <button @click="$emit('novo-feedback')" class="px-6 py-2 mt-10 rounded bg-fb-500 shadow-md text-sm text-gray-100 xl:hover:bg-fb-700 transition-colors duration-200">Enviar outro feedback!</button>
  </div>
</template>
