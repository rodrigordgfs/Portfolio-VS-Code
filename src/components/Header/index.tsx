import {
  HeaderContainer,
  HeaderIcon,
  HeaderIconsContainer,
  HeaderText,
  MenuIcon,
  VSCodeIcon,
} from './styles'
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
      <HeaderText>Portfolio - Shinoda Labs Code</HeaderText>
    </HeaderContainer>
  )
}
