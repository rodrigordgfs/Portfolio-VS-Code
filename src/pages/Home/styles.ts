import styled from 'styled-components'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export const HomeContainer = styled(ScrollArea.Root)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  height: calc(100vh - 120px);
  gap: 30px;

  @media only screen and (max-device-width: 1200px) {
    flex-direction: column;
  }
`

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
  flex: 1;

  @media only screen and (max-device-width: 1200px) {
    justify-content: flex-end;
    align-items: center;
    flex: 0.5;
  }
`
export const HelloText = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.accent};
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 16px;

  span {
    font-weight: 700;
    font-size: 30px;
    margin-top: 2px;
  }
`

export const NameText = styled.p`
  font-size: 2.625rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  display: flex;

  span {
    color: ${({ theme }) => theme.accent};
  }

  @media only screen and (max-device-width: 1200px) {
    font-size: 2rem;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 1;
`

export const ImageRodrigo = styled.img`
  width: 300px;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
