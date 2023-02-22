import useIsActiveRoute from '../../../../hook/useIsActiveRoute'
import { TabItem } from '../TabItem'
import {
  CSSIcon,
  HTMLIcon,
  ReactIcon,
  TabsMobileContainer,
  VUEIcon,
} from './styles'
import { DropdownFiles } from './components/DropdrownFiles'

export function TabMobile() {
  return (
    <TabsMobileContainer>
      {useIsActiveRoute('/') && (
        <TabItem to="/">
          <ReactIcon />
          <span>Home.tsx</span>
        </TabItem>
      )}
      {useIsActiveRoute('/about') && (
        <TabItem to="/about">
          <VUEIcon />
          <span>About.vue</span>
        </TabItem>
      )}
      {useIsActiveRoute('/projects') && (
        <TabItem to="/projects">
          <HTMLIcon />
          <span>Projects.html</span>
        </TabItem>
      )}
      {useIsActiveRoute('/contact') && (
        <TabItem to="/contact">
          <CSSIcon />
          <span>Contact.css</span>
        </TabItem>
      )}
      <DropdownFiles />
    </TabsMobileContainer>
  )
}
