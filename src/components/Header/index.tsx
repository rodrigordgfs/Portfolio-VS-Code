import {
  HeaderActionsContainer,
  HeaderContainer,
  HeaderIcon,
  HeaderIconsContainer,
  HeaderText,
  MenuIcon,
  VSCodeIcon,
} from './styles'
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from 'react-icons/vsc'
import { useContext } from 'react'
import { SettingsContext } from '../../contexts/SettingsContext'

export function Header() {
  const { toogleDrawer } = useContext(SettingsContext)

  function handleToogleDrawer() {
    toogleDrawer()
  }

  return (
    <HeaderContainer>
      <HeaderIconsContainer>
        <HeaderIcon>
          <VSCodeIcon />
        </HeaderIcon>
        <HeaderIcon onClick={handleToogleDrawer}>
          <MenuIcon />
        </HeaderIcon>
      </HeaderIconsContainer>
      <HeaderText>Shinoda Labs</HeaderText>
      <HeaderActionsContainer>
        <VscChromeMinimize />
        <VscChromeMaximize />
        <VscChromeClose />
      </HeaderActionsContainer>
    </HeaderContainer>
  )
}
