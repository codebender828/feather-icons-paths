/**
 * @description Check whether the user is in China with his IP.
 */
export const areYouinChina = () => {
  return fetch('https://api.ipgeolocation.io/ipgeo?apiKey=049fb81c8f6841fbbf5a3f438c7eb967')
    .then(res => res.json())
    .then((data) => {
      if (String(data.country_tld).match(/cn/i)) {
        return true
      }
      return false
    })
    .catch(error => console.error('[Kadukadu]: Unable to geolocate user', error))
}
