import styled from 'styled-components'
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
  font-size: 16px;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px 12px 16px;
  cursor: pointer;
  gap: 8px;
  background: ${(props) =>
    props.active ? props.theme.secondary : props.theme.transparent};

  &:hover {
    background: ${(props) => props.theme.secondary};
    transition: 0.2s background ease-in-out;
  }
`
