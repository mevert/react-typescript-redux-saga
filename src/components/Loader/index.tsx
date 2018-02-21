import styled, { keyframes } from 'styled-components'

const scaleOut = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`

const Loader = styled.div`
  width: 40px;
  height: 40px;
  background-color: #333;
  margin: 30px auto;
  border-radius: 100%;
  animation: ${scaleOut} 1s ease-in-out infinite;
`

export default Loader