import { createHead } from '@unhead/vue'

import { MotionPlugin } from '@vueuse/motion'
import { setupLayouts } from 'virtual:generated-layouts'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from 'vue-router/auto-routes'

import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'

import './utils/varlet-style-imports'
import './styles/main.scss'

const app = createApp(App)
const router = createRouter({
  routes: setupLayouts(routes),
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(router)

const head = createHead()
app.use(head)

app.use(MotionPlugin)

app.mount('#app')
