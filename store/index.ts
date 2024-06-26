// import { defineStore } from 'pinia';
//
// export const useMainStore = defineStore('main', {
//     state: () => ({
//         movies: [],
//         companies: [],
//         categories: [],
//         addresses: [],
//     }),
//     actions: {
//         async fetchMovies() {
//             const response = await fetch('http://localhost:3000/api/movies');
//             this.movies = await response.json();
//         },
//         async fetchCompanies() {
//             const response = await fetch('http://localhost:3000/api/companies');
//             this.companies = await response.json();
//         },
//         async fetchCategories() {
//             const response = await fetch('http://localhost:3000/api/categories');
//             this.categories = await response.json();
//         },
//         async fetchAddresses() {
//             const response = await fetch('http://localhost:3000/api/addresses');
//             this.addresses = await response.json();
//         },
//     },
// });
