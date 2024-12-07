import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')         //creates app then shows in browser.

const app = createApp(App)

// create a store, configure app to use store
const piniaStore = createPinia()
app.use(piniaStore)

// show in browser in the div with id = 'app'
app.mount('#app')


