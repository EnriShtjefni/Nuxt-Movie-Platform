<template>
  <div class="min-h-screen">
    <Filter />
    <MoviesContainer :movies="movies" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Filter from '@/components/Filter.vue';
import MoviesContainer from '~/components/MoviesContainer.vue';

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
  {
    id: 2,
    title: 'Movie Title 2',
    description: 'Description of movie 2',
    year: 2003,
    status: 'Released',
    company: { name: 'Company 1' },
    categories: [{ name: 'Category 1' }, { name: 'Category 2' }],
  },
  {
    id: 3,
    title: 'Movie Title 3',
    description: 'Description of movie 3',
    year: 2013,
    status: 'Released',
    company: { name: 'Company 1' },
    categories: [{ name: 'Category 1' }, { name: 'Category 2' }],
  },
  {
    id: 2,
    title: 'Movie Title 4',
    description: 'Description of movie 4',
    year: 2008,
    status: 'Released',
    company: { name: 'Company 1' },
    categories: [{ name: 'Category 1' }, { name: 'Category 2' }],
  },
]);
</script>
