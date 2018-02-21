import { combineReducers } from 'redux'
import weatherReducer from './containers/Weather/reducer'

export interface State {
  weatherReducer: any
}

export const state = combineReducers({
  weatherReducer
})
