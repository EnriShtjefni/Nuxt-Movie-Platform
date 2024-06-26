<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Create Movie</h2>
    <MovieForm :is-edit="false" movie=""/>
  </div>
</template>

<script setup>
import MovieForm from '@/components/MovieForm.vue';
</script>
