import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 80px);
  width: 100%;
`
export const DefaultLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 80px);

  @media only screen and (max-device-width: 510px) {
    height: 100vh;
  }
`

export const ContentContainer = styled.div`
  flex: 1;
`

export const MenuWrapper = styled.div`
  @media only screen and (max-device-width: 510px) {
    display: none;
  }
`
