import useIsActiveRoute from '../../../../hook/useIsActiveRoute'
import { TabItemLink } from './styles'
import { ReactNode } from 'react'

interface TabItemProps {
  to: string
  children: ReactNode
}

export function TabItem({ to, children }: TabItemProps) {
  return (
    <TabItemLink active={useIsActiveRoute(to)} to={to}>
      {children}
    </TabItemLink>
  )
}
