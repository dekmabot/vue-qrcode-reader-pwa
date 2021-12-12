import { createApp } from 'vue'
import App from './App.vue'
import Varlet from '@varlet/ui'
import './registerServiceWorker'
import router from './router'
import '@varlet/ui/es/style.js'
import Vue3QrcodeReader from "vue3-qrcode-reader";

createApp(App)
    .use(Varlet)
    .use(Vue3QrcodeReader)
    .use(router)
    .mount('#app')
