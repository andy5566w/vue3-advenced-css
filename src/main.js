import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import router from './router/index.js'
import App from './App.vue'
import vSlideIn from '@/directives/vSlideIn.js'

const pinia = createPinia()

createApp(App)
  .directive('SlideIn', vSlideIn)
  .use(router)
  .use(pinia)
  .mount('#app')
