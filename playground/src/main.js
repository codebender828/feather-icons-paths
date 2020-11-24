import { createApp } from 'vue'
import App from './App.vue'
import './css/genesis.css'
import './css/preflight.css'
import { createGenerator } from './utils/text'

createApp(App)
  .use({
    install (app) {
      app.provide('$generator', createGenerator())
    }
  })
  .mount('#app')
