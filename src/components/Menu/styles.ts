import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  align-items: center;
  width: 60px;
  background: ${(props) => props.theme.primary};

  @media only screen and (max-device-width: 510px) {
    height: 100vh;
  }
`
export const MenuItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 60px;
  font-size: 25px;
  margin: 4px 0;
  color: ${(props) => props.theme['gray-300']};
  cursor: pointer;

  &:hover {
    transition: 0.2s color ease-in-out;
    color: ${(props) => props.theme['gray-400']};
  }
`

export const Divider = styled.span`
  width: 40px;
  height: 2px;
  background: ${(props) => props.theme['gray-400']};
  opacity: 0.2;
  margin: 8px 0;
`
