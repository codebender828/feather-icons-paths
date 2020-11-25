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
      const { init } = createKadukadu({
        parserOptions: {},
        pinyin: true,
        showHSK: true,
        showPopoverTranslations: true,
        renderer: {
          target: 'target'
        }
      })

      try {
        let parse
        init()
          .then(parseFunc => {
            parse = parseFunc
          })
        generator.start()
        generator.on('sentence-generated', ({ sentence }) => {
          console.log(parse(sentence))
        })
      } catch (error) {
        console.error(error)
      }
    })
  }
})
</script>
