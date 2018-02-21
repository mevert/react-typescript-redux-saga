import { createAction } from 'redux-actions'
import { actionTypes as at } from './constants'
// import { User } from './model'

const changeSearchText = createAction(
  at.WEATHER_CHANGE_SEARCH_TEXT,
  (text: string) => text
)

const fetchWeather = createAction(
  at.WEATHER_FETCH
)

const fetchWeatherSuccess = createAction(
  at.WEATHER_FETCH_SUCCESS,
  (forecasts: any) => forecasts // YODO add correct types
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