import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import "semantic-ui-css/semantic.css"
import VueImageLoader from '@kevindesousa/vue-image-loader'
import VueA11yDialog from 'vue-a11y-dialog'


createApp(App).use(store).use(router).use(VueImageLoader).use(VueA11yDialog).mount('#app')
