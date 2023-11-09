import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Producto from '../components/ProductDetail.vue'
import Lista from '../components/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }, 
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }, 
    {
      path: '/producto/:id',
      name: 'producto',
      component: Producto
    }, 
    {
      path: '/lista',
      name: 'litas',
      component: Lista
    }
  ]
})

export default router
