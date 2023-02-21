import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

export const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 60px);
  width: 100%;
`
export const OutletContainer = styled(Outlet)`
  flex: 1;
`

export const MenuWrapper = styled.div`
  @media only screen and (max-device-width: 510px) {
    display: none;
  }
`
