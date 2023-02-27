import styled from 'styled-components'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export const AboutContainer = styled(ScrollArea.Root)`
  display: flex;
  flex-direction: row;
  padding: 16px;
  width: 100%;
  max-width: 100%;
  height: calc(100vh - 120px);
`

export const AboutContent = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  color: ${({ theme }) => theme['gray-300']};
  gap: 4px;
`

export const Doctype = styled.li`
  span:nth-child(1) {
    color: ${({ theme }) => theme.purple};
  }

  span:nth-child(2) {
    color: ${({ theme }) => theme.yellow};
  }
`
export const Html = styled.li`
  span:nth-child(1) {
    color: ${({ theme }) => theme.purple};
  }

  span:nth-child(2) {
    color: ${({ theme }) => theme.yellow};
  }

  span:nth-child(3) {
    color: ${({ theme }) => theme.accent};
  }
`

export const Head = styled.li`
  padding-left: 16px;

  span:nth-child(1) {
    color: ${({ theme }) => theme.purple};
  }
`

export const Meta = styled.li`
  padding-left: 32px;

  span:nth-child(1) {
    color: ${({ theme }) => theme.purple};
  }

  span:nth-child(2) {
    color: ${({ theme }) => theme.yellow};
  }

  span:nth-child(3) {
    color: ${({ theme }) => theme.accent};
  }
`

export const Title = styled.li`
  padding-left: 32px;
  display: flex;
  flex-direction: row;

  p {
    color: ${({ theme }) => theme.text};
  }

  span {
    color: ${({ theme }) => theme.purple};
  }
`

export const Body = styled.li`
  padding-left: 16px;

  span {
    color: ${({ theme }) => theme.purple};
  }
`

export const Header = styled.li`
  padding-left: 32px;

  span {
    color: ${({ theme }) => theme.purple};
  }
`

export const H1 = styled.li`
  padding-left: 48px;
  display: flex;

  p {
    color: ${({ theme }) => theme.text};
  }

  span {
    color: ${({ theme }) => theme.purple};
  }
`

export const H2 = styled.li`
  padding-left: 48px;
  display: flex;

  p {
    color: ${({ theme }) => theme.text};
  }

  span {
    color: ${({ theme }) => theme.purple};
  }
`

export const P = styled.li`
  padding-left: 48px;
  display: flex;

  span {
    color: ${({ theme }) => theme.purple};
  }
`

export const PText = styled.p`
  padding-left: 62px;

  p {
    color: ${({ theme }) => theme.text};
  }
`

export const Section = styled.li`
  padding-left: 32px;

  span {
    color: ${({ theme }) => theme.purple};
  }
`

export const Input = styled.li`
  padding-left: 48px;

  span:nth-child(1) {
    color: ${({ theme }) => theme.purple};
  }

  span:nth-child(2) {
    color: ${({ theme }) => theme.yellow};
  }

  span:nth-child(3) {
    color: ${({ theme }) => theme.accent};
  }

  span:nth-child(4) {
    color: ${({ theme }) => theme.yellow};
  }

  span:nth-child(5) {
    color: ${({ theme }) => theme.accent};
  }

  span:nth-child(6) {
    color: ${({ theme }) => theme.yellow};
  }

  span:nth-child(7) {
    color: ${({ theme }) => theme.accent};
  }
`
