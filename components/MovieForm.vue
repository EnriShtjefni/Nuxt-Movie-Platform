<template>
  <div class="min-h-screen">
    <div class="bg-gray-300 rounded-lg p-5 max-w-2xl mx-5 mt-10 text-black">
      <h3 class="text-2xl font-bold mb-4">{{ isEdit ? 'Edit Movie' : 'Add a Movie' }}</h3>
      <hr class="border-t border-white my-4">
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="title" class="block">Title</label>
          <input v-model="formData.title" id="title" type="text" class="w-full p-2 border rounded text-black" />
        </div>
        <div class="mb-4">
          <label for="description" class="block">Description</label>
          <textarea v-model="formData.description" id="description" class="w-full p-2 border rounded text-black"></textarea>
        </div>
        <div class="mb-4">
          <label for="year" class="block">Year</label>
          <input v-model="formData.year" id="year" type="number" class="w-full p-2 border rounded text-black" />
        </div>
        <div class="mb-4">
          <label for="status" class="block">Status</label>
          <input v-model="formData.status" id="status" type="text" class="w-full p-2 border rounded text-black" />
        </div>
        <div class="mb-4">
          <label for="company" class="block">Company</label>
          <select v-model="formData.company" id="company" class="w-full p-2 border rounded text-black">
            <option v-for="company in companies" :key="company.id" :value="company.name">{{ company.name }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="categories" class="block">Categories</label>
          <select v-model="formData.categories" id="categories" class="w-full p-2 border rounded text-black" multiple>
            <option v-for="category in categories" :key="category.id" :value="category.name">{{ category.name }}</option>
          </select>
        </div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">{{ isEdit ? 'Update' : 'Create' }}</button>
        <a href="/" class="ml-4 text-blue-500">Cancel</a>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  isEdit: boolean;
  movie: {
    title: string;
    description: string;
    year: number;
    status: string;
    company: string;
    categories: string[];
  };
}>();

const formData = ref({ ...props.movie });

const companies = ref([
  { id: 1, name: 'Company 1' },
  { id: 2, name: 'Company 2' },
]);

const categories = ref([
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
]);

const isEdit = computed(() => props.isEdit);

const submitForm = () => {
  if (isEdit.value) {
    console.log('Updating movie:', formData.value);
    // Handle update logic here
  } else {
    console.log('Creating movie:', formData.value);
    // Handle create logic here
  }
};
</script>
