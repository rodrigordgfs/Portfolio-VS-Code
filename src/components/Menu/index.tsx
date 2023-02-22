import { Divider, MenuContainer, MenuItem } from './styles'
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

export function Menu() {
  return (
    <MenuContainer>
      <MenuItem href="#">
        <MdEmail />
      </MenuItem>
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
      <MenuItem href="#">
        <FaFileDownload />
      </MenuItem>
      <MenuItem href="#">
        <FiSettings />
      </MenuItem>
    </MenuContainer>
  )
}
