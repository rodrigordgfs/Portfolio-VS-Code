import { AiFillCaretDown } from 'react-icons/ai'
import { ButtonShowFiles, FilesContainer, FilesItem } from './styles'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import useIsActiveRoute from '../../../../../../hook/useIsActiveRoute'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { SettingsContext } from '../../../../../../contexts/SettingsContext'
import { ReactIcon } from '../../../../../ReactIcon'
import { VUEIcon } from '../../../../../VUEIcon'
import { HTMLIcon } from '../../../../../HTMLIcon'
import { CSSIcon } from '../../../../../CSSIcon'

export function DropdownFiles() {
  const navigate = useNavigate()
  const { toogleDrawer, isDrawerOpen } = useContext(SettingsContext)

  function handleFileClick(path: string) {
    navigate(path)
    if (isDrawerOpen) {
      toogleDrawer()
    }
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <ButtonShowFiles>
          <AiFillCaretDown />
        </ButtonShowFiles>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <FilesContainer sideOffset={5}>
          <DropdownMenu.Item>
            <FilesItem
              active={useIsActiveRoute('/')}
              onClick={() => handleFileClick('/')}
            >
              <ReactIcon />
              <p>Home.tsx</p>
            </FilesItem>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <FilesItem
              active={useIsActiveRoute('/about')}
              onClick={() => handleFileClick('/about')}
            >
              <VUEIcon />
              <p>About.vue</p>
            </FilesItem>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <FilesItem
              active={useIsActiveRoute('/projects')}
              onClick={() => handleFileClick('/projects')}
            >
              <HTMLIcon />
              <p>Projects.html</p>
            </FilesItem>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <FilesItem
              active={useIsActiveRoute('/contact')}
              onClick={() => handleFileClick('/contact')}
            >
              <CSSIcon />
              <p>Contact.css</p>
            </FilesItem>
          </DropdownMenu.Item>
        </FilesContainer>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
