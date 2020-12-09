
import { maxBy } from 'lodash-es'

/** Get's the translation of a word with the highest confidence */
export const getByMaxConfidence = (translations) => maxBy(translations, 'confidence')
