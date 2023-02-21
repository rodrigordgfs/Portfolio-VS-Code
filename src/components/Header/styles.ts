import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.primary};
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  -moz-box-shadow: 0 0px 4px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 0px 4px rgba(0, 0, 0, 0.4);
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.4);
`
export const HeaderIcon = styled.div`
  color: ${(props) => props.theme['visual-studio-code']};
  display: flex;
  align-items: center;
`

export const HeaderText = styled.p`
  flex: 1;
  padding: 0 16px;
  text-align: center;
  font-size: 0.875rem;
`
