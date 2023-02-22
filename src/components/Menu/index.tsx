import { Divider, MenuContainer } from './styles'
import {
  BsLinkedin,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
  BsGithub,
} from 'react-icons/bs'
import { FaFileDownload } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { MenuItem } from './components/MenuItem'

export function Menu() {
  return (
    <MenuContainer>
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
    </MenuContainer>
  )
}
