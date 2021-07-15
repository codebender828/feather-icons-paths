<template>
  <div class="text-blue-400">
    Hello feather icons js
    <div v-html="arrowUp" />
  </div>
</template>

<script>
import { feActivity, feArrowUp } from '../../src/index'
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const arrowUp = ref(feArrowUp.icon[3])
    onMounted(() => {
      console.log(feActivity, feArrowUp)
    })

    return {
      arrowUp
    }
  }
}
</script>
