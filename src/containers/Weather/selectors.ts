import { createSelector } from 'reselect'

const selectWeatherDomain = (state: any) => state.weatherReducer // TODO add correct types
const selectSearchText = createSelector(selectWeatherDomain, (weather: any) => weather.searchText)
const selectForecast = createSelector(selectWeatherDomain, (weather: any) => weather.forecast)
const selectForecasts = createSelector(selectForecast, (forecast: any) => forecast.consolidated_weather)
const selectCity = createSelector(selectForecast, (forecast: any) => forecast.title)
const selectLatLng = createSelector(selectForecast, (forecast: any) => forecast.lattLong)
const selectErrorMessage = createSelector(selectWeatherDomain, (weather: any) => weather.errorMessage)
const selectIsLoading = createSelector(selectWeatherDomain, (weather: any) => weather.isLoading)

export {
  selectSearchText,
  selectForecast,
  selectForecasts,
  selectCity,
  selectLatLng,
  selectErrorMessage,
  selectIsLoading
}
