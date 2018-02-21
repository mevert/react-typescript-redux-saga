import { fork, put, take, call, select, all } from 'redux-saga/effects'

import {
  findCountry,
  getWeather
} from './service'
import { actionTypes as at } from './constants'
import { 
  fetchWeatherSuccess,
  fetchWeatherFail
} from './actions'

import { selectSearchText } from './selectors'

// import { } from './model'

export function* handleFetchWeather() {
  try {
    // TODO use correct types instead of any
    const searchText = yield select(selectSearchText)
    const cities: Array<any> = yield call(findCountry, searchText)
    if (cities.length > 0) {
      const { woeid, title, latt_long} = cities[0]
      const lattLongList = latt_long.split(',')
      const lattLong = {
        lat: parseFloat(lattLongList[0]),
        lng: parseFloat(lattLongList[1])
      }
      const { consolidated_weather }: any = yield call(getWeather, woeid)
      yield put(fetchWeatherSuccess({
        title,
        lattLong,
        consolidated_weather
      }))
    } else {
      yield put(fetchWeatherFail('City not found from metaweather.com/api/'))
    }
  } catch (err) {
    yield put(fetchWeatherFail('Could not fetch weather from metaweather.com/api/'))
  }
}

function* watchFetchWeather() {
  while (true) {
    yield take(at.WEATHER_FETCH)
    yield fork(handleFetchWeather)
  }
}

function * watchWeatherActions () {
  yield all([
    fork(watchFetchWeather)
  ])
}

export default [
  watchWeatherActions
]
