import { createApp } from 'vue'
import App from './App.vue'
import Varlet from '@varlet/ui'
import './registerServiceWorker'
import router from './router'
import '@varlet/ui/es/style.js'

createApp(App)
    .use(Varlet)
    .use(router)
    .mount('#app')
