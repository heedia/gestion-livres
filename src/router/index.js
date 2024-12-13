import { createRouter, createWebHistory } from 'vue-router';
import BookList from '../components/BookList.vue';
import BookForm from '../components/BookForm.vue';

const routes = [
  { path: '/', name: 'BookList', component: BookList },
  { path: '/add', name: 'AddBook', component: BookForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;