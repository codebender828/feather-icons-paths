<template>
  <div class="p-10">
    Hello world
    <div
      id="target"
      class="rounded-lg bg-black-alpha-800 mt-5 p-3 min-h-sm"
    />
  </div>
</template>

<script>
import { defineComponent, inject, onMounted } from 'vue'
import { createKadukadu } from '@akkadu/kadukadu'

export default defineComponent({
  name: 'App',
  setup () {
    const generator = inject('$generator')
    onMounted(async () => {
      const { init } = createKadukadu()
      const parse = await init()

      generator.start()
      generator.on('sentence-generated', ({ sentence }) => {
        console.log(parse(sentence))
      })
    })
  }
})
</script>
