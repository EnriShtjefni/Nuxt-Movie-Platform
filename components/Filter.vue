<template>
  <div class="rounded-lg bg-customGray p-6 mb-6">
    <div class="bg-yellow-400 rounded px-6 py-3 mb-3">
      <div class="flex items-center justify-between">
        <p class="text-white text-lg font-bold">FILTER BY</p>
        <button @click="toggleFilters" class="text-white font-medium focus:outline-none">
          {{ showFilters ? '▲ HIDE FILTERS' : '▼ SHOW FILTERS' }}
        </button>
      </div>
    </div>
    <div v-show="showFilters" class="bg-customGray border-yellow-500 border-2 p-4 rounded-lg">
      <form @submit.prevent="submitFilters" class="flex flex-wrap gap-4">
        <div class="w-full sm:w-1/2 lg:w-1/4">
          <label for="search-element" class="text-white">Search</label>
          <input id="search-element" type="text" v-model="filters.search" placeholder="🔍..." class="form-input">
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4">
          <label for="company-element" class="text-white">Select Company</label>
          <select id="company-element" v-model="filters.company_id" class="form-select">
            <option value="">-</option>
            <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.name }}</option>
          </select>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4">
          <label for="category-element" class="text-white">Select Category</label>
          <select id="category-element" v-model="filters.categories" multiple class="form-select">
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4">
          <label for="order-element" class="text-white">Order By</label>
          <select id="order-element" v-model="filters.order" class="form-select">
            <option value="">-</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <div class="w-full flex justify-end mt-4">
          <button type="submit" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Filter</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showFilters = ref(false);

const filters = ref({
  search: '',
  company_id: '',
  categories: [],
  order: ''
});

const companies = [
  { id: 1, name: 'Company A' },
  { id: 2, name: 'Company B' },
  { id: 3, name: 'Company C' }
];

const categories = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' }
];

// Methods
const toggleFilters = () => {
  showFilters.value = !showFilters.value;
};

const submitFilters = () => {
  // Implement your filter logic here
  console.log('Filters:', filters.value);
};
</script>


<style scoped>
.form-input,
.form-select {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  background-color: #434343;
  color: white;
  border: 1px solid gray;
}

.form-select:focus,
.form-input:focus {
  outline: none;
  border-color: yellow;
}
</style>
