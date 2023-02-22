import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface TabItemProps {
  active: boolean
}

export const TabItemLink = styled(Link)<TabItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  background: ${(props) =>
    props.active ? props.theme.secondary : props.theme.primary};
  border-top: 3px solid
    ${(props) => (props.active ? props.theme.accent : props.theme.transparent)};
  padding: 0 16px;
  font-size: 1rem;
  gap: 8px;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;

  span {
    color: ${(props) => props.theme.text};
  }
`
