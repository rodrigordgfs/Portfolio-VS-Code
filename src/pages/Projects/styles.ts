import styled from 'styled-components'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export const ProjectsContainer = styled(ScrollArea.Root)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  height: calc(100vh - 120px);
`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  @media only screen and (max-device-width: 849px) and (min-device-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-device-width: 549px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
