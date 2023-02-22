import styled from 'styled-components'
import { FcFolder } from 'react-icons/fc'

interface FilesItemProps {
  active: boolean
}

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 80px);
`

export const SocialNetworksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  align-items: center;
  width: 60px;
  background: ${(props) => props.theme.primary};

  @media only screen and (max-device-width: 850px) {
    height: 100vh;
  }
`

export const FilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  width: 200px;
  padding: 0 16px;
  background: ${(props) => props.theme.primary};

  @media only screen and (max-device-width: 850px) {
    height: 100vh;
  }
`

export const Divider = styled.span`
  width: 40px;
  height: 2px;
  background: ${(props) => props.theme['gray-400']};
  opacity: 0.2;
  margin: 8px 0;
`

export const ExplorerTitle = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.text};
  margin-top: 12px;
  text-transform: uppercase;
`

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`

export const FolderIcon = styled(FcFolder)`
  font-size: 20px;
`

export const PortfolioText = styled.p`
  font-size: 14px;
`

export const Files = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  gap: 4px;
`

export const FilesItem = styled.li<FilesItemProps>`
  font-size: 14px;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0 8px 16px;
  cursor: pointer;
  gap: 8px;
  background: ${(props) =>
    props.active ? props.theme.secondary : props.theme.transparent};

  &:hover {
    background: ${(props) => props.theme.secondary};
    transition: 0.2s background ease-in-out;
  }
`
