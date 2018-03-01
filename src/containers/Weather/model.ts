
export interface WeatherAction {
  type: string
  payload?: any
}

export interface RootState {
  weatherReducer: WeatherState
}

export interface WeatherState {
  searchText: string,
  errorMessage?: string,
  isLoading: boolean,
  forecast: Object
}

export interface City {
  title: string
  latt_long: string
  location_type: string
  woeid: number
}

export interface LatLong {
  lat: number
  lng: number
}

export interface Weather {
  air_pressure: number
  applicable_date: string
  created: string
  humidity: number
  id: number
  max_temp: number
  min_temp: number
  predictability: number
  the_temp: number
  visibility: number
  weather_state_abbr: string
  weather_state_name: string,
  wind_direction: number
  wind_direction_compass: number
  wind_speed: number
}

export interface WeatherResponse {
  consolidated_weather: Array<Weather>
}

export interface Forecast {
  title: string
  lattLong: LatLong
  consolidated_weather: Array<Weather>
}
