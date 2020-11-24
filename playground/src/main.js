// import { createApp } from 'vue'
// import App from './App.vue'
import './css/genesis.css'
import './css/preflight.css'
import { createGenerator } from './utils/text'

// createApp(App)
//   .mount('#app')

const generator = createGenerator()

generator.start()

generator.on('word-generated', ({ word, index }) => {
  console.log('Word generated', word, index)
})

generator.on('generator-created', (val) => {
  console.warn('CREATED', val)
})

generator.on('generator-ended', (val) => {
  console.warn('ENDED', val)
})

generator.on('sentence-generated', ({ sentence, index }) => {
  console.log('Sentence generated', index)
})

generator.on('word-interval-length-changed', val => {
  console.log('WORD INTERVAL LENGTH CHANGED', val)
})

setTimeout(() => {
  generator.stop()
}, 60000)
