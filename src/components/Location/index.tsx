import * as React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'
import Loader from '../Loader'
import Container from './Container'

interface MapProps extends React.Props<Location> {
  latLong?: any
}

const googleMapURL =
  'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDnuJOocdgQBKgFVuICeQgCIrds8_VkBoo'

export const Location: React.StatelessComponent<MapProps> = ({ latLong }) => {
    const CityMap = withScriptjs(
      withGoogleMap(() => (
        <GoogleMap
          defaultCenter={latLong}
          defaultZoom={10}
          options={{disableDefaultUI: true}}
        />)
    ))
    const mapElement = <div style={{height: '400px'}}/> // can't be styled component 
    return (
        <CityMap 
          loadingElement={<Loader/>}
          containerElement={<Container />}
          googleMapURL={googleMapURL}
          mapElement={mapElement}
        />
    )
}

export default Location
