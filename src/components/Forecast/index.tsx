import * as React from 'react'
import styled from 'styled-components'

import GridItem from '../GridItem'
import Card from '../Card'
import Title from './Title'
import Label from './Label'
import Image from './Image'

const Data = styled.div`
  margin: 32px 0 0 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(140px,1fr));
  color: #212121;
`

const DataLabel = styled.div`
  margin: 8px 0;
`

const Temperature = styled<any, 'div'>('div')`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${(props: any) => props.color ? 'red' : 'blue'};
`

const InlineBlock = styled.div`
  display: inline-block;
  margin: 0 10px 0 10px;
  vertical-align: middle;
`

const DataValue = styled.div`
  margin: 8px 0;
  word-break: break-all;
  :after {
    content: "\\00a0";
  }
`

const Max = styled.span`
  color: red;
`
const Min = styled.span`
  color: blue;
`

export interface ForecastProps {
  date?: string
  weatherState?: string
  imgUrl?: string
  temp: number
  min?: number
  max?: number
  wind?: number
  humidity?:  number
  predictability?: number
}

export const Forecast: React.StatelessComponent<ForecastProps> = (
  { date, weatherState, imgUrl, temp, min, max, wind, humidity, predictability }) => {
  return (
    <GridItem>
      <Card>
        <Title>{date}</Title>
        <InlineBlock>
          <Image alt={weatherState} src={imgUrl} />
          <Label>{weatherState}</Label>
        </InlineBlock>
        <InlineBlock>
          <Temperature color={temp > 0}>
            {temp} °C
          </Temperature>
        </InlineBlock>
        <Data>
          <DataLabel>Max</DataLabel><DataValue><Max>{max} °C</Max></DataValue>
          <DataLabel>Min</DataLabel><DataValue><Min>{min} °C</Min></DataValue>
          <DataLabel>Wind speed</DataLabel><DataValue>{wind} m/s</DataValue>
          <DataLabel>Humidty</DataLabel><DataValue>{humidity} %</DataValue>
          <DataLabel>Predictability</DataLabel><DataValue>{predictability} %</DataValue>
        </Data>
      </Card>
    </GridItem>
  )
}

export default Forecast
