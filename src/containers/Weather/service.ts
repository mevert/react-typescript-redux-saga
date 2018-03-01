export const findCountry = (country: string) => {
  return fetch(`/api/location/search/?query=${country}`)
    .then(res => {
      return res.json()
    })
    .then(result => result)
}

export const getWeather = (id: number) => {
  return fetch(`/api/location/${id}/`)
    .then(res => {
      return res.json()
    })
    .then(result => result)
}
