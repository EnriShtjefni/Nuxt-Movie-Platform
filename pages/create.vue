<template>
  <MovieForm :isEdit="false" :movie="emptyMovie" />
</template>

<script setup>
import MovieForm from '@/components/MovieForm.vue';

const emptyMovie = {
  title: '',
  description: '',
  year: null,
  status: '',
  company: '',
  categories: [],
};
</script>
