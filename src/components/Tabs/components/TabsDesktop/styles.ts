import styled from 'styled-components'
export const TabsDesktopContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-device-width: 850px) {
    display: none;
  }
`
