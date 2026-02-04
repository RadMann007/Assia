import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
// // Import des composants
import Home from './pages/Home.vue'
import Application from './pages/Application.vue'
import Articles from './pages/Articles.vue'
import ContactPage from './pages/ContactPage.vue'
import Etude from './pages/Etude.vue'

// Configuration du router
const routes = [
  { path: '/', component: Home },
  { path: '/application', component: Application },
  { path: '/contact', component: ContactPage },
  { path: '/articles', component: Articles },
  { path: '/etude', component: Etude },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Création de l'app
const app = createApp(App)
app.use(router)
app.mount('#app')