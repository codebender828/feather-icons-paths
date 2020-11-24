import { createApp } from 'vue'
import App from './App.vue'
import './css/genesis.css'
import './css/preflight.css'
import { Generator } from './utils/text'

createApp(App)
  .mount('#app')

const generator = new Generator({
  wordInterval: [200, 600]
})
console.log(generator)
