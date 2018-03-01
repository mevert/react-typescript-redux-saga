import { createAction } from 'redux-actions'
import { actionTypes as at } from './constants'
import { Forecast } from './model'

const changeSearchText = createAction(
  at.WEATHER_CHANGE_SEARCH_TEXT,
  (text: string) => text
)

const fetchWeather = createAction(at.WEATHER_FETCH)

const fetchWeatherSuccess = createAction(
  at.WEATHER_FETCH_SUCCESS,
  (forecast: Forecast) => forecast
)

const fetchWeatherFail = createAction(
  at.WEATHER_FETCH_FAIL,
  (text: string) => text
)

export {
  changeSearchText,
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherFail
}