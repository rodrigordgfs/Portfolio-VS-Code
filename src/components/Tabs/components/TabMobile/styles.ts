import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'
import { RiVuejsFill } from 'react-icons/ri'

export const TabsMobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-device-width: 850px) {
    display: none;
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
