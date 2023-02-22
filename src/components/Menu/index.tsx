import {
  CSSIcon,
  Divider,
  ExplorerTitle,
  Files,
  FilesContainer,
  FilesItem,
  FolderIcon,
  HTMLIcon,
  MenuContainer,
  PortfolioContainer,
  PortfolioText,
  ReactIcon,
  SocialNetworksContainer,
  VUEIcon,
} from './styles'
import {
  BsLinkedin,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
  BsGithub,
} from 'react-icons/bs'
import { useContext } from 'react'
import { FaFileDownload } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { MenuItem } from './components/MenuItem'
import { SettingsContext } from '../../contexts/SettingsContext'
import { useNavigate } from 'react-router-dom'
import useIsActiveRoute from '../../hook/useIsActiveRoute'

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
      <SocialNetworksContainer>
        <MenuItem tooltip="E-mail" url="mailto:rodrigordgfs@gmail.com">
          <MdEmail />
        </MenuItem>
        <MenuItem tooltip="Github" url="https://github.com/rodrigordgfs">
          <BsGithub />
        </MenuItem>
        <MenuItem
          tooltip="Linkedin"
          url="https://www.linkedin.com/in/rodrigo-viegas-rodrigues-83315164/"
        >
          <BsLinkedin />
        </MenuItem>
        <MenuItem tooltip="WhatsApp" url="https://wa.me/5551996236798">
          <BsWhatsapp />
        </MenuItem>
        <MenuItem
          tooltip="Instagram"
          url="https://www.instagram.com/mr_shinodaa/"
        >
          <BsInstagram />
        </MenuItem>
        <MenuItem tooltip="Facebook" url="https://www.facebook.com/MrShiinoda/">
          <BsFacebook />
        </MenuItem>
        <Divider />
        <MenuItem
          tooltip="Download CV"
          url="https://drive.google.com/file/d/1_92kjQVFA6sFeSVYmwvSKSlyYB_TUthZ/view?usp=sharing"
        >
          <FaFileDownload />
        </MenuItem>
        <MenuItem tooltip="Configurações">
          <FiSettings />
        </MenuItem>
      </SocialNetworksContainer>
      <FilesContainer>
        <ExplorerTitle>Explorer</ExplorerTitle>
        <PortfolioContainer>
          <FolderIcon />
          <PortfolioText>Portfolio</PortfolioText>
        </PortfolioContainer>
        <Files>
          <FilesItem
            active={useIsActiveRoute('/')}
            onClick={() => handleFileClick('/')}
          >
            <ReactIcon />
            <p>Home.tsx</p>
          </FilesItem>
          <FilesItem
            active={useIsActiveRoute('/about')}
            onClick={() => handleFileClick('/about')}
          >
            <VUEIcon />
            <p>About.vue</p>
          </FilesItem>
          <FilesItem
            active={useIsActiveRoute('/projects')}
            onClick={() => handleFileClick('/projects')}
          >
            <HTMLIcon />
            <p>Projects.html</p>
          </FilesItem>
          <FilesItem
            active={useIsActiveRoute('/contact')}
            onClick={() => handleFileClick('/contact')}
          >
            <CSSIcon />
            <p>Contact.css</p>
          </FilesItem>
        </Files>
      </FilesContainer>
    </MenuContainer>
  )
}
