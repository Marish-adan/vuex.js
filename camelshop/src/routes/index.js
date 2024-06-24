import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/homepage.vue"
import products from "./../components/products.vue"
import Aboutus from "./../components/Aboutus.vue"
import cart from "./../components/cart.vue"
import contactus from "./../components/contactus.vue"
import servicesoffered from "./../components/servicesoffered.vue"


const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
        path: '/products',
        name: 'products',
        component: products,
      },
      {
        path: '/Aboutus',
        name: 'Aboutus',
        component: Aboutus,
      },
      {
        path: '/cart',
        name: 'cart',
        component: cart,
      },
      {
        path: '/contactus',
        name: 'contactus',
        component: contactus,
      },
      {
        path: '/servicesoffered',
        name: 'servicesoffered',
        component: servicesoffered,
      },
      
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router