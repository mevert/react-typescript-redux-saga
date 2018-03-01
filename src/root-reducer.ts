import { combineReducers } from 'redux'
import weatherReducer from './containers/Weather/reducer'
import { WeatherState } from './containers/Weather/model'

export interface State {
  weatherReducer: WeatherState
}

export const state = combineReducers({
  weatherReducer
})
