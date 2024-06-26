<template>
  <div>
    <Filter />
    <div>
      <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import Filter from '@/components/Filter.vue';
import Card from '@/components/Card.vue';

const components = { Filter, Card };

const movies = ref([
  {
    id: 1,
    title: 'Movie Title 1',
    description: 'Description of movie 1',
    year: 2021,
    status: 'Released',
    company: { name: 'Company 1' },
    categories: [{ name: 'Category 1' }, { name: 'Category 2' }],
  },
]);
</script>
