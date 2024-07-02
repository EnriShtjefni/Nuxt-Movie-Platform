<template>
  <div class="bg-customGray rounded-lg p-5 mb-5">
    <p class="text-lg font-bold mb-4">Latest Movies</p>
    <hr class="mb-4">
    <div class="cards-container">
      <div v-if="movies.length === 0">
        <p>No movies found.</p>
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="movie-list">
        <Movie v-for="movie in paginatedMovies" :key="movie.id" :movie="movie" />
      </div>
    </div>
    <hr class="mb-4">
    <div class="flex justify-center mt-4">
      <div class="flex space-x-4 rounded-lg">
        <button
            @click="goToPreviousPage"
            :disabled="!hasPreviousPage"
            class="btn btn-secondary bg-cardColor rounded-lg px-4 py-2"
        >Previous</button>
        <div class="relative">
          <button
              class="btn btn-secondary bg-cardColor dropdown-toggle rounded-lg px-4 py-2"
              type="button"
              @click="toggleDropdown"
          >
            Per Page: {{ perPage }}
          </button>
          <ul v-show="isDropdownOpen" class="dropdown-menu absolute bg-white shadow-lg rounded-lg mt-2">
            <li v-for="n in [1, 2, 3, 4, 5]" :key="n" class="block">
              <a @click="setPerPage(n)" class="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer" href="#">{{ n }}</a>
            </li>
          </ul>
        </div>
        <button
            @click="goToNextPage"
            :disabled="!hasNextPage"
            class="btn btn-secondary bg-cardColor rounded-lg px-4 py-2"
        >Next</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Movie from '~/components/Movie.vue';

const props = defineProps<{
  movies: Array<{
    id: number;
    title: string;
    description: string;
    year: number;
    status: string;
    company: { name: string };
    categories: Array<{ name: string }>;
  }>;
}>();

const currentPage = ref(1);
const perPage = ref(3);
const isDropdownOpen = ref(false);

const paginatedMovies = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = start + perPage.value;
  return props.movies.slice(start, end);
});

const hasPreviousPage = computed(() => currentPage.value > 1);
const hasNextPage = computed(() => currentPage.value * perPage.value < props.movies.length);

const goToPreviousPage = () => {
  if (hasPreviousPage.value) {
    currentPage.value -= 1;
  }
};

const goToNextPage = () => {
  if (hasNextPage.value) {
    currentPage.value += 1;
  }
};

const setPerPage = (n: number) => {
  perPage.value = n;
  isDropdownOpen.value = false;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>
