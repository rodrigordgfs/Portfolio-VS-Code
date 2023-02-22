import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'
import { RiVuejsFill } from 'react-icons/ri'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface FilesItemProps {
  active: boolean
}

export const ButtonShowFiles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 20px;
  margin-right: 10px;

  &:hover {
    background: ${(props) => props.theme.accent};
    transition: 0.2s background ease-in-out;
  }
`

export const FilesContainer = styled(DropdownMenu.Content)`
  background: ${(props) => props.theme.primary};
  margin-right: 10px;
`

export const FilesItem = styled.li<FilesItemProps>`
  font-size: 14px;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 8px 16px;
  cursor: pointer;
  gap: 8px;
  background: ${(props) =>
    props.active ? props.theme.secondary : props.theme.transparent};

  &:hover {
    background: ${(props) => props.theme.secondary};
    transition: 0.2s background ease-in-out;
  }
`

export const ReactIcon = styled(FaReact)`
  color: ${(props) => props.theme.react};
  font-size: 1.125rem;
`

export const CSSIcon = styled(DiCss3)`
  color: ${(props) => props.theme.css};
  font-size: 1.125rem;
`

export const HTMLIcon = styled(AiFillHtml5)`
  color: ${(props) => props.theme.html};
  font-size: 1.125rem;
`

export const VUEIcon = styled(RiVuejsFill)`
  color: ${(props) => props.theme.vue};
  font-size: 1.125rem;
`
