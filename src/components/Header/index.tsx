import { HeaderContainer, HeaderIcon, HeaderText } from './styles'
import { SiVisualstudio } from 'react-icons/si'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderIcon>
        <SiVisualstudio />
      </HeaderIcon>
      <HeaderText>index.tsx - Portfolio - Visual Studio Code</HeaderText>
    </HeaderContainer>
  )
}
