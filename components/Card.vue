<template>
  <div class="bg-gray-700 text-white p-4 rounded mb-4">
    <h3 class="text-lg font-bold">{{ movie.title }}</h3>
    <p><strong>Description:</strong> {{ movie.description }}</p>
    <p><strong>Year:</strong> {{ movie.year }}</p>
    <p><strong>Status:</strong> {{ movie.status }}</p>
    <p><strong>Company:</strong> {{ movie.company.name }}</p>
    <p><strong>Categories:</strong> {{ movie.categories.map(c => c.name).join(', ') }}</p>
    <div class="flex justify-between mt-4">
      <button class="bg-blue-500 text-white py-2 px-4 rounded">Edit</button>
      <button class="bg-red-500 text-white py-2 px-4 rounded">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  movie: {
    title: string;
    description: string;
    year: number;
    status: string;
    company: string;
    categories: string[];
  }
}>();
</script>

