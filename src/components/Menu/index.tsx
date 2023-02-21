import { Divider, MenuContainer, MenuItem } from './styles'
import { ImHome3 } from 'react-icons/im'
import {
  BsLinkedin,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
  BsGithub,
} from 'react-icons/bs'
import { FaFileDownload } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'

export function Menu() {
  return (
    <MenuContainer>
      <MenuItem href="#">
        <ImHome3 />
      </MenuItem>
      <Divider />
      <MenuItem href="#">
        <BsGithub />
      </MenuItem>
      <MenuItem href="#">
        <BsLinkedin />
      </MenuItem>
      <MenuItem href="#">
        <BsWhatsapp />
      </MenuItem>
      <MenuItem href="#">
        <BsInstagram />
      </MenuItem>
      <MenuItem href="#">
        <BsFacebook />
      </MenuItem>
      <Divider />
      <MenuItem>
        <FaFileDownload />
      </MenuItem>
      <MenuItem>
        <FiSettings />
      </MenuItem>
    </MenuContainer>
  )
}
