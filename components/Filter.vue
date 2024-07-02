<template>
  <div class="rounded-lg bg-customGray p-6 mb-6 mt-10">
    <div class="bg-yellow-400 rounded px-6 py-3 mb-3">
      <div class="flex items-center justify-between text-black">
        <p class="text-lg font-bold">FILTER BY</p>
        <button @click="toggleFilters" class="font-medium focus:outline-none">
          {{ showFilters ? '▲ HIDE FILTERS' : '▼ SHOW FILTERS' }}
        </button>
      </div>
    </div>
    <div v-show="showFilters" class="bg-customGray border-yellow-500 border-2 p-4 rounded-lg">
      <form @submit.prevent="submitFilters" class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label for="search-element" class="text-white">Search</label>
          <input id="search-element" type="text" v-model="filters.search" placeholder="🔍..." class="w-full p-2 text-base rounded-md bg-selectColor text-white border border-gray-400 focus:outline-none focus:border-yellow-400">
        </div>
        <div>
          <label for="company-element" class="text-white">Select Company</label>
          <select id="company-element" v-model="filters.company_id" class="w-full p-2 text-base rounded-md bg-selectColor text-white border border-gray-400 focus:outline-none focus:border-yellow-400">
            <option value="">-</option>
            <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.name }}</option>
          </select>
        </div>
        <div>
          <label for="category-element" class="text-white">Select Category</label>
          <div class="relative">
            <div @click="toggleDropdown" class="w-full p-2 text-base rounded-md bg-selectColor text-white border border-gray-400 cursor-pointer flex justify-between items-center">
              <span>{{ selectedCategories.length ? selectedCategories.join(', ') : '-' }}</span>
              <span>{{ showDropdown ? '▲' : '▼' }}</span>
            </div>
            <div v-show="showDropdown" class="absolute w-full mt-1 bg-selectColor text-white border border-gray-400 rounded-md z-10">
              <div v-for="category in categories" :key="category.id" class="p-2 hover:bg-gray-700 cursor-pointer" @click="toggleCategory(category.id)">
                <input type="checkbox" :checked="isSelected(category.id)" class="mr-2">{{ category.name }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <label for="order-element" class="text-white">Order By</label>
          <select id="order-element" v-model="filters.order" class="w-full p-2 text-base rounded-md bg-selectColor text-white border border-gray-400 focus:outline-none focus:border-yellow-400">
            <option value="">-</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <div class="flex justify-end items-center mt-4 col-span-full">
          <button type="submit" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Filter</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showFilters = ref(false);
const showDropdown = ref(false);
const selectedCategories = ref<string[]>([]);

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

const toggleFilters = () => {
  showFilters.value = !showFilters.value;
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const toggleCategory = (id: number) => {
  if (filters.value.categories.includes(id)) {
    filters.value.categories = filters.value.categories.filter(category => category !== id);
  } else {
    filters.value.categories.push(id);
  }
  updateSelectedCategories();
};

const isSelected = (id: number) => {
  return filters.value.categories.includes(id);
};

const updateSelectedCategories = () => {
  selectedCategories.value = categories.filter(category => filters.value.categories.includes(category.id)).map(category => category.name);
};

const submitFilters = () =>{
console.log('submitted');
return
};
</script>
