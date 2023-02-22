import { useCallback, useEffect } from 'react'
import {
  CSSIcon,
  HTMLIcon,
  ReactIcon,
  TabItem,
  TabsContainer,
  VUEIcon,
} from './styles'
import { matchRoutes, useLocation } from 'react-router-dom'

export function Tabs() {
  const location = useLocation()

  const isActiveRoute = useCallback(
    (path: string) => {
      const match = matchRoutes([{ path }], location.pathname)
      if (match) {
        return match.length > 0
      }
      return false
    },
    [location.pathname],
  )

  useEffect(() => {
    console.log()
  }, [isActiveRoute])

  return (
    <TabsContainer>
      <TabItem isActive={isActiveRoute('/')} to="/">
        <ReactIcon />
        <span>Home.tsx</span>
      </TabItem>
      <TabItem isActive={isActiveRoute('/about')} to="/about">
        <VUEIcon />
        <span>About.css</span>
      </TabItem>
      <TabItem isActive={isActiveRoute('/projects')} to="/projects">
        <HTMLIcon />
        <span>Projects.html</span>
      </TabItem>
      <TabItem isActive={isActiveRoute('/contact')} to="/contact">
        <CSSIcon />
        <span>Contact.html</span>
      </TabItem>
    </TabsContainer>
  )
}
