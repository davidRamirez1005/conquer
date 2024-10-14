<template>
  <div
    class="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800"
  >
    <div
      alt="image here"
      class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-1 w-1/2 h-1/2 rounded-lg bg-gray-800 overflow-hidden"
    >
      <img :src="image" alt="" class="w-full h-full object-cover">
    </div>

    <div class="">
      <h2 class="text-1xl font-bold mb-2 text-gray-100">{{ title }}</h2>
      <p class="text-gray-200 line-clamp-3">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
</style>
