import {
  ExplorerTitle,
  Files,
  FilesContainer,
  FilesItem,
  FolderIcon,
  MenuContainer,
  PortfolioContainer,
  PortfolioText,
} from './styles'
import { useContext } from 'react'
import { SettingsContext } from '../../contexts/SettingsContext'
import { useNavigate } from 'react-router-dom'
import useIsActiveRoute from '../../hook/useIsActiveRoute'
import { ReactIcon } from '../ReactIcon'
import { VUEIcon } from '../VUEIcon'
import { HTMLIcon } from '../HTMLIcon'
import { CSSIcon } from '../CSSIcon'
import { SideMenuIcons } from './components/SideMenuIcons'

export function Menu() {
  const navigate = useNavigate()
  const { toogleDrawer, isDrawerOpen } = useContext(SettingsContext)

  function handleFileClick(path: string) {
    navigate(path)
    if (isDrawerOpen) {
      toogleDrawer()
    }
  }

  return (
    <MenuContainer>
      <SideMenuIcons />
      <FilesContainer>
        <ExplorerTitle>Explorer</ExplorerTitle>
        <PortfolioContainer>
          <FolderIcon />
          <PortfolioText>Portifólio</PortfolioText>
        </PortfolioContainer>
        <Files>
          <FilesItem
            active={useIsActiveRoute('/')}
            onClick={() => handleFileClick('/')}
          >
            <ReactIcon />
            <p>Inicio.tsx</p>
          </FilesItem>
          <FilesItem
            active={useIsActiveRoute('/about')}
            onClick={() => handleFileClick('/about')}
          >
            <HTMLIcon />
            <p>Sobre.html</p>
          </FilesItem>
          <FilesItem
            active={useIsActiveRoute('/projects')}
            onClick={() => handleFileClick('/projects')}
          >
            <VUEIcon />
            <p>Projetos.vue</p>
          </FilesItem>
          <FilesItem
            active={useIsActiveRoute('/contact')}
            onClick={() => handleFileClick('/contact')}
          >
            <CSSIcon />
            <p>Contato.css</p>
          </FilesItem>
        </Files>
      </FilesContainer>
    </MenuContainer>
  )
}
