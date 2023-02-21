import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  width: 60px;
  background: ${(props) => props.theme.primary};
`
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  font-size: 25px;
  color: ${(props) => props.theme['gray-300']};
  cursor: pointer;

  &:hover {
    transition: 0.2s color ease-in-out;
    color: ${(props) => props.theme['gray-400']};
  }
`
