import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

export const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 50px);
  width: 100%;
`
export const OutletContainer = styled(Outlet)`
  flex: 1;
`
