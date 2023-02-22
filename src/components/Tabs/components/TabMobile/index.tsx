import useIsActiveRoute from '../../../../hook/useIsActiveRoute'
import { TabItem } from '../TabItem'
import { TabsMobileContainer } from './styles'
import { DropdownFiles } from './components/DropdrownFiles'
import { ReactIcon } from '../../../ReactIcon'
import { VUEIcon } from '../../../VUEIcon'
import { HTMLIcon } from '../../../HTMLIcon'
import { CSSIcon } from '../../../CSSIcon'

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
