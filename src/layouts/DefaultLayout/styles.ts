import { Outlet } from 'react-router-dom'
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

  @media only screen and (max-device-width: 850px) {
    height: calc(100vh - 50px);
    width: 100%;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: calc(100vw - 265px);
  width: 100%;
  flex: 1;
  overflow: hidden;

  @media only screen and (max-device-width: 850px) {
    max-width: 100%;
  }
`

export const OutletContainer = styled(Outlet)`
  flex: 1;
  max-width: 100%;
`

export const MenuWrapper = styled.div`
  @media only screen and (max-device-width: 850px) {
    display: none;
  }
`

export const LinesCounter = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25px;
  width: 100%;
  height: calc(100vh - 120px);
  text-align: center;
  overflow: hidden;

  p {
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme['gray-400']};
    opacity: 0.5;
  }
`
