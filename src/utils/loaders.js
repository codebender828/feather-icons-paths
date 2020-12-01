/**
 * Download dictionary
 * @param {String} url Dictionary URL
 * @param {VoidFunction} onProgress Progress function
 * @param {VoidFunction} done Called when download is completed
 */
export const loadDictionary = async (url, onProgress = () => null, done = () => null) => {
  try {
    if (!('TextDecoder' in window)) return
    const _url = 'https://akkadu-assets.s3.amazonaws.com/kadukadu/zh-en.json'
    const response = await fetch(_url || url)
    const reader = response.body.getReader()
    const contentLength = +response.headers.get('Content-Length')

    let receivedLength = 0
    const chunks = []
    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      chunks.push(value)
      receivedLength += value.length

      onProgress(receivedLength, contentLength)
    }

    const chunksAll = new Uint8Array(receivedLength) // (4.1)
    let position = 0
    for (const chunk of chunks) {
      chunksAll.set(chunk, position) // (4.2)
      position += chunk.length
    }

    const result = new TextDecoder('utf-8').decode(chunksAll)
    done(result)
    return JSON.parse(result)
  } catch (error) {
    throw new Error('[Kadukadu]: ' + error.message)
  }
}
