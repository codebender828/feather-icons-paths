import { createLorem } from './lorem/zh'
import { stagger } from './timers'
import { isFunction, merge } from 'lodash-es'
import { reactive, ref } from '@vue/reactivity'

const DEFAULTS = {
  sentenceLength: 10,
  wordIntervalLength: [50, 600],
  initialDelay: 2000
}

export const createGenerator = (defaultOptions = DEFAULTS) => {
  // Variables
  const initialized = ref(true)
  const sentence = ref()
  const currentWordIndex = ref(0)
  const currentSentenceIndex = ref(0)
  const options = reactive(merge(DEFAULTS, defaultOptions))

  // Events
  const events = {
    'generator-created': [],
    'word-generated': [],
    'sentence-generated': [],
    'generator-started': [],
    'generation-stopped': [],
    'sentence-length-changed': [],
    'word-interval-length-changed': [],
    'generator-ended': []
  }

  // Generate sentence and split it into array
  const start = async () => {
    sentence.value = createLorem(options.sentenceLength).split('')
    // Stagger words and dispactch them
    await stagger(
      sentence.value,
      options.wordIntervalLength,
      (word, i) => {
        dispatch('word-generated', { word, index: currentWordIndex.value })
        currentWordIndex.value = i
      },
      initialized.value ? start : undefined
    )
    currentSentenceIndex.value++
    dispatch('sentence-generated', { sentence: sentence.value.join(''), index: currentSentenceIndex.value })
  }

  /** Remove all event listeners and stop publishing */
  const stop = () => {
    initialized.value = false
    Object.keys(events).forEach(event => {
      try {
        events[event].splice(0, events[event].length)
      } catch (_error) {}
    })
    dispatch('generator-ended', true)
  }

  /** Event listener */
  const on = (event, handler) => {
    if (!isEvent(event)) return console.warn('[Generator]: Unsupported event', event)
    if (isFunction(handler)) {
      events[event].push(handler)
    }
  }

  /** Checks if an event is supported by generator */
  const isEvent = (event) => {
    return event in events
  }

  /** Event dispatcher */
  const dispatch = (event, payload) => {
    if (!isEvent(event)) return

    const handlers = events[event]
    for (let i = 0; i < handlers.length; ++i) {
      const handler = handlers[i]
      handler(payload)
    }
  }

  /** Defines the sentence length of a sentence */
  const defineSentenceLength = (length) => {
    dispatch('word-interval-length-changed', length)
    options.sentenceLength = length
  }

  dispatch('generator-created', true)
  return {
    stop,
    on,
    start,
    initialized,
    defineSentenceLength
  }
}
