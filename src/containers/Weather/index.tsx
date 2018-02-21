import * as React from 'react'
const connect = require('react-redux').connect
import {
  changeSearchText,
  fetchWeather
} from './actions'
import {
  selectForecasts,
  selectErrorMessage,
  selectCity,
  selectIsLoading,
  selectLatLng
} from './selectors'

import Container from '../../components/Container'
import MainContent from '../../components/MainContent'
import Options from '../../components/Options'
import GridContainer from '../../components/GridContainer'
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Loader from '../../components/Loader'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import Forecast from '../../components/Forecast'
import Location from '../../components/Location'

interface WeatherPageProps extends React.Props<Weather> {
  forecasts: Array<any>
  errorMessage: string
  city: string
  isLoading: boolean
  latLng: any
  getWeather: () => void
  changeSearchText: (text: string) => Promise<void>
}

class Weather extends React.Component<WeatherPageProps, void> {

  componentWillMount() {
    this.props.getWeather()
  }

  handleTextFieldKeyDown = (e: any) => { // TODO set correct type
    if (e.key === 'Enter') {
      this.props.getWeather()
    }
  }

  onTextFieldChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.changeSearchText(e.currentTarget.value)
  }

  round = (x: number) => (Number((x).toFixed(1)))

  formatDate = (date: string) => (new Date(date).toDateString())

  renderForecast = (forecast: any) => {
    const {
      id, applicable_date, min_temp, max_temp, wind_speed,
      humidity, predictability, weather_state_abbr, weather_state_name
    } = forecast
    const imgUrl = `https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`
    const forecastProps = {
      key: id,
      date: this.formatDate(applicable_date),
      weatherState: weather_state_name,
      min: this.round(min_temp),
      max: this.round(max_temp),
      wind: this.round(wind_speed),
      humidity: this.round(humidity),
      predictability: this.round(predictability),
      imgUrl
    }
    return (
      <Forecast {...forecastProps} />
    )
  }

  public render(): React.ReactElement<{}> {
    const {
      getWeather,
      forecasts,
      city,
      errorMessage,
      isLoading,
      latLng
    } = this.props
    return (
      <Container>
        <NavBar>
          <Header>Weather forecast</Header>
          <Options>
            <TextField
              onChange={e => this.onTextFieldChange(e)}
              onKeyPress={e => this.handleTextFieldKeyDown(e)}
            />
            <Button onClick={getWeather}>Search</Button>
          </Options>
        </NavBar>
        {errorMessage && <p>{errorMessage}</p>}
        {isLoading && <Loader />}
        {forecasts &&
          <MainContent>
            <SubHeader>{city}</SubHeader>
            <GridContainer>
                {forecasts.map(forecast => this.renderForecast(forecast))}
            </GridContainer>
            <Location latLong={latLng}/>
          </MainContent>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    forecasts: selectForecasts(state),
    city: selectCity(state),
    errorMessage: selectErrorMessage(state),
    isLoading: selectIsLoading(state),
    latLng: selectLatLng(state)
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    changeSearchText: (text: string) => {
      dispatch(changeSearchText(text))
    },
    getWeather: (): void => {
      dispatch(fetchWeather())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
