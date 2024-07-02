<template>
  <MovieForm :isEdit="true" :movie="movie" />
</template>

<script setup>
import MovieForm from '@/components/MovieForm.vue';

const movie = {
  title: 'Movie Title 1',
  description: 'Description of movie 1',
  year: 2021,
  status: 'Released',
  company: 'Company 1',
  categories: ['Category 1', 'Category 2'],
};
</script>
