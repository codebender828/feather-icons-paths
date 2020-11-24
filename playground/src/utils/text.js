import chineseLorem from './lorem/zh'
import { merge } from 'lodash-es'

const DEFAULTS = {
  sentenceLength: 10,
  wordInterval: [100, 300]
}

export class Generator {
  constructor (options = DEFAULTS) {
    this.options = merge(DEFAULTS, options)
  }

  createGenerator () {

  }
}

console.log(chineseLorem(DEFAULTS.sentenceLength, 'c'))
