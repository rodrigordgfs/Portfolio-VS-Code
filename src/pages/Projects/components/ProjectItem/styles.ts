import styled from 'styled-components'

export const ProjectItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.primary};
  border-radius: 4px;
  gap: 1rem;
`

export const ProjectItemImage = styled.img`
  width: 100%;
`
export const ProjectItemTitle = styled.h2`
  font-size: 1.5rem;
`

export const ProjectItemDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme['gray-400']};
  line-height: 130%;
`
export const ProjectItemTagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const ProjectItemTag = styled.span`
  font-size: 12px;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-transform: uppercase;
`

export const ProjectItemLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`
export const ProjectItemLink = styled.a`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transition: 0.2s color ease-in-out;
  }
`
