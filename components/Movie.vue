<template>
  <div class="rounded-lg bg-cardColor p-6 mb-6 border border-yellow-400">
    <div class="card-header mb-3">
      <h3 class="text-lg font-bold"><strong>Title:</strong> {{ movie.title }}</h3>
    </div>
    <hr class="border-t border-gray-500 mb-3">
    <div class="card-body mb-3">
      <p><strong>Description:</strong> {{ movie.description }}</p>
    </div>
    <div class="card-body mb-3">
      <p><strong>Year:</strong> {{ movie.year }}</p>
    </div>
    <div class="card-body mb-3">
      <p><strong>Status:</strong> {{ movie.status }}</p>
    </div>
    <div class="card-body mb-3">
      <p><strong>Company:</strong> {{ movie.company.name }}</p>
    </div>
    <div class="card-body mb-3">
      <p><strong>Categories:</strong> {{ movie.categories.map(c => c.name).join(', ') }}</p>
    </div>
    <hr class="border-t border-gray-500 mb-3">
    <div class="card-footer flex justify-between mt-4">
      <router-link :to="{ name: 'edit', params: { id: movie.id } }" class="bg-yellow-400 text-black py-2 px-4 rounded">
        Edit
      </router-link>
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
