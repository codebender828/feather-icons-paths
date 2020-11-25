/**
 * Generates a string of random chanracters of desired length. Defaults to 3 characters
 * @param {Number} size Length of the id string to be generated
 * @returns {String} id
 */
export function useId (size = 3) {
  let uuid = ''
  const dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < size; i++) {
    uuid += dictionary.charAt(Math.floor(Math.random() * dictionary.length))
  }
  return uuid
}
