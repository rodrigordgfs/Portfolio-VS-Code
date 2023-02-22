import styled from 'styled-components'
import * as Tooltip from '@radix-ui/react-tooltip'

export const MenuItemContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 60px;
  font-size: 1.5625rem;
  margin: 4px 0;
  color: ${(props) => props.theme['gray-300']};
  cursor: pointer;

  &:hover {
    transition: 0.2s color ease-in-out;
    color: ${(props) => props.theme['gray-400']};
  }
`
export const MenuItemTooltip = styled(Tooltip.Content)`
  background: ${(props) => props.theme.black};
  padding: 4px 8px;
  border-radius: 4px;
`
