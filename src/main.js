import { createApp } from 'vue'
import './assets/css/reset.css'
import router from './router'
import App from './App.vue'
import store from './store'
import vueDebounce from 'vue-debounce'

createApp(App)
  .use(store)
  .use(router)
  .use(vueDebounce)
  .mount('#app')
