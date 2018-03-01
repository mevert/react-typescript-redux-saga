import { createSelector } from 'reselect'
import {
  RootState,
  WeatherState,
  Forecast
} from './model'

const selectWeatherDomain = (state: RootState) => state.weatherReducer
const selectSearchText = createSelector(selectWeatherDomain, (weather: WeatherState) => weather.searchText)
const selectForecast = createSelector(selectWeatherDomain, (weather: WeatherState) => weather.forecast)
const selectForecasts = createSelector(selectForecast, (forecast: Forecast) => forecast.consolidated_weather)
const selectCity = createSelector(selectForecast, (forecast: Forecast) => forecast.title)
const selectLatLng = createSelector(selectForecast, (forecast: Forecast) => forecast.lattLong)
const selectErrorMessage = createSelector(selectWeatherDomain, (weather: WeatherState) => weather.errorMessage)
const selectIsLoading = createSelector(selectWeatherDomain, (weather: WeatherState) => weather.isLoading)

export {
  selectSearchText,
  selectForecast,
  selectForecasts,
  selectCity,
  selectLatLng,
  selectErrorMessage,
  selectIsLoading
}
