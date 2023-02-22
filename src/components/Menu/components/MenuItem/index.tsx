import { MenuItemContainer, MenuItemTooltip } from './styles'
import { ReactNode } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'

interface MenuProps {
  children: ReactNode
  tooltip: string
  url?: string
}

export function MenuItem({ children, tooltip, url }: MenuProps) {
  return (
    <Tooltip.Provider skipDelayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <MenuItemContainer target="_blank" href={url}>
            {children}
          </MenuItemContainer>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <MenuItemTooltip
            side="right"
            className="TooltipContent"
            sideOffset={5}
          >
            {tooltip}
            <Tooltip.Arrow className="TooltipArrow" />
          </MenuItemTooltip>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
