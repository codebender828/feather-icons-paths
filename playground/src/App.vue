<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold">
      Kadukadu
    </h1>

    <div class="flex justify-center py-10">
      <button
        class="mx-auto px-5 py-3 rounded-full bg-blue-400 justify-center items-center border-thin outline-none bg-white focus:shadow-outline inline-flex font-bold text-white"
        @click="start"
      >
        <svg
          class="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        /><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg>
        Start generating text
      </button>
    </div>

    <label for="show-transliteration">
      <input
        id="show-transliteration"
        v-model="showPinyin"
        type="checkbox"
      >
      Show transliteration
    </label>

    <div
      v-if="initialized"
      class="bg-teal-50 text-teal-600 shadow-lg rounded-lg font-bold px-5 py-4 inline-flex items-center my-4"
    >
      <svg
        class="w-6 h-6 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      /></svg>
      Renderer initialized
    </div>

    <div
      v-if="progress !== 100"
      class="flex justify-center items-center flex-col px-4 py-3 rounded-lg shadow-lg bg-blue-50 text-blue-500 font-bold"
    >
      <p class="mb-1 font-regular">
        Loading dictionary - {{ progress }}%
      </p>

      <div class="rounded-full overflow-hidden h-1 bg-blue-100 w-64">
        <div
          :style="{ width: `${progress}%` }"
          class="bg-blue-500 h-full"
        />
      </div>
    </div>

    <div
      v-else
      id="target"
      :ref="target"
      :class="{ 'hide-transliteration': !showPinyin }"
      style="overflow-y: scroll"
      class="rounded-lg bg-black-alpha-800 relative mt-5 p-5 h-64"
    />
  </div>
</template>

<script>
import { defineComponent, inject, onMounted, ref } from 'vue'
import { createKadukadu } from '@akkadu/kadukadu'
import h from 'hyperscript'

export default defineComponent({
  name: 'App',
  setup () {
    const target = ref(null)
    const showPinyin = ref(true)

    const { start, on, stop } = inject('$generator')
    const initialized = ref(false)
    const progress = ref(0)

    onMounted(async () => {
      const { init } = createKadukadu({
        parserOptions: {},
        onProgress: (value, total) => {
          progress.value = parseInt((value / total) * 100, 0)
        },
        showHSK: true,
        renderer: {
          transliteration: true,
          showPopover: true,
          target: 'target',
          events: {
            onclick: (e) => {
              console.log('Clicked word', e)
            }
          },
          popoverOptions: {
            tippy: {
              onShow: (instance) => {
                const tooltip = window.$kadukadu.tooltipEl.cloneNode(true)
                const tooltipBox = tooltip.querySelector('.tooltip-box')
                const found = instance.reference.getAttribute('data-word')
                const details = JSON.parse(found)

                if (instance && found) {
                  tooltipBox.appendChild(
                    h('div.flex', [
                      h('button.px-2.py-1.inline-flex.bg-blue-400.text-white.rounded-md.add-to-flashcards-button.focus:shadow-outline.font-bold.ml-auto', {
                        onclick: (e) => {
                          console.log('Popover button clicked!', details)
                        }
                      }, 'Add to flashcards')
                    ])
                  )
                  instance.setContent(tooltip)
                }
              },
              delay: [0, 0]
            }
          }
        }
      })

      /**
       * After initialization we append elements to DOM by caling the render function returned.
       */
      const render = await init()
      render('之前有很多人问学好前端需要学习哪些 js 库, 主流框架应该学 vue 还是 react ? 针对这些问题, 笔者来说说自己的看法和学习总结.')

      let count = 0
      const target = document.getElementById('target')
      const interval = setInterval(() => {
        target.lastChild.remove()
        render('之前有很多人问学好前端需要学习哪些 js 库, 主流框架应该学 vue 还是 react ? 针对这些问题, 笔者来说说自己的看法和学习总结.')
        count++
        if (count === 5) clearInterval(interval)
      }, 2000)

      on('sentence-generated', ({ sentence }) => {
        render(sentence)
      })
    })

    return {
      target,
      start: () => {
        start()
        initialized.value = true
      },
      stop: () => {
        stop()
        initialized.value = false
      },
      initialized,
      showPinyin,
      progress
    }
  }
})
</script>

<style lang="scss">
button:disabled {
  cursor: not-allowed;
  filter: grayscale(1);
}

.hide-transliteration {
  [data-transliteration] {
    visibility: hidden;
    height: 0;
    overflow: hidden;
    margin: 0;
  }

  &[data-kadukadu-word] {
    transform: translateY(0) !important;
  }

  .kadukadu-character {
    transition: all 0.1s ease-in;

    &:hover {
      background-color: var(--blue-400);
      color: white;
      padding: 2px 3px;
      font-weight: bold;
      border-radius: 4px;
    }
  }
}

.kadukadu-character {
  transition: all 0.1s ease-in;

  &:hover {
    background-color: var(--blue-400);
    color: white;
    padding: 2px 3px;
    font-weight: bold;
    border-radius: 4px;
  }
}
</style>
