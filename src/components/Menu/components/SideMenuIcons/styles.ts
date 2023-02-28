import styled from 'styled-components'

export const SocialNetworksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  align-items: center;
  justify-content: space-between;
  width: 60px;
  background: ${(props) => props.theme.primary};

  @media only screen and (max-device-width: 850px) {
    height: 100vh;
  }
`
