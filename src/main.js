import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importer le router
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
createApp(App).mount('#app').use(router)  // Utiliser le router;
