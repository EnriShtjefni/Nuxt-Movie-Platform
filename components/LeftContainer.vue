<template>
  <div class="w-1/4 text-white p-4">
    <div class="mb-4">
      <a class="block py-2 hover:bg-gray-700" href="/">🏠 Dashboard</a>
      <a class="block py-2 hover:bg-gray-700" href="/movies">◽ Movies</a>
      <div class="relative">
        <button @click="toggleActions" class="py-2 w-full text-left hover:bg-gray-700">Actions</button>
        <ul v-if="showActions" class="absolute left-0 mt-2 bg-gray-700">
          <li class="py-2 px-4 hover:bg-gray-600"><a href="/create">Add</a></li>
          <li class="py-2 px-4 hover:bg-gray-600"><a href="/create">Create</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showActions = ref(false);

function toggleActions() {
  showActions.value = !showActions.value;
}
</script>

