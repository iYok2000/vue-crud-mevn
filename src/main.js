import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import "semantic-ui-css/semantic.css"
import VueImageLoader from '@kevindesousa/vue-image-loader'

createApp(App).use(store).use(router).use(VueImageLoader).mount('#app')
