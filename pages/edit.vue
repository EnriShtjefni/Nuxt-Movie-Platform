<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Edit Movie</h2>
    <MovieForm :isEdit="true" :movie="movie" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MovieForm from '@/components/MovieForm.vue';

const movie = ref({
  id: 1,
  title: 'Movie Title 1',
  description: 'Description of movie 1',
  year: 2021,
  status: 'Released',
  company: 'Company 1',
  categories: ['Category 1', 'Category 2'],
});
</script>
