import { handleActions } from 'redux-actions'
import { actionTypes as at } from './constants'
import { WeatherAction, WeatherState } from './model'

const initialState: WeatherState = {
  searchText: 'Helsinki',
  errorMessage: undefined,
  isLoading: false,
  forecast: {}
}

const weather = handleActions(
  {
    [at.WEATHER_CHANGE_SEARCH_TEXT]: (state, action: WeatherAction) => {
      return {
        ...state,
        searchText: action.payload
      }
    },
    [at.WEATHER_FETCH]: (state, action: WeatherAction) => {
      return {
        ...state,
        isLoading: true,
        errorMessage: undefined
      }
    },
    [at.WEATHER_FETCH_SUCCESS]: (state, action: WeatherAction) => {
      return {
        ...state,
        forecast: action.payload,
        errorMessage: undefined,
        isLoading: false
      }
    },
    [at.WEATHER_FETCH_FAIL]: (state, action: WeatherAction) => {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      }
    }
  },
  initialState
)

export default weather
