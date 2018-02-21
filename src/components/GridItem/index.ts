import styled from 'styled-components'

const GridItem = styled.div`
  display: inline-block;
  display: box;
  width: 48%;
  margin: 0px 5px 15px;
  @media only screen and (max-width : 600px) {
    width: 100%;
  }
`

export default GridItem
