import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'
import { RiVuejsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

interface TabItemProps {
  isActive: boolean
}

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 100%;
  background: ${(props) => props.theme.primary};
`

export const TabItem = styled(Link)<TabItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) =>
    props.isActive ? props.theme.secondary : props.theme.primary};
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
