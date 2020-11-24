/** Gets a random value between two numbers */
export const random = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
