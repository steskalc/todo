import { createApp } from 'vue'
import App from './App.vue'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'
import {Quasar} from 'quasar'

const todoApp = createApp(App)

todoApp.use(Quasar, {
    plugins: {}
})

todoApp.mount('#app')
