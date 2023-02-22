import styled from 'styled-components'

export const TabsMobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-device-width: 850px) {
    display: none;
  }
`
