import styled from 'styled-components'
import { SiVisualstudio } from 'react-icons/si'
import { FiMenu } from 'react-icons/fi'

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
  display: flex;
  align-items: center;
`

export const VSCodeIcon = styled(SiVisualstudio)`
  color: ${(props) => props.theme['visual-studio-code']};
`

export const MenuIcon = styled(FiMenu)`
  color: ${(props) => props.theme.text};
  font-size: 18px;
  cursor: pointer;
  display: none;

  @media only screen and (max-device-width: 510px) {
    display: flex;
  }
`

export const HeaderText = styled.p`
  flex: 1;
  padding: 0 16px;
  text-align: center;
  font-size: 0.875rem;
`
export const HeaderIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`
