import { CSSIcon } from '../../../CSSIcon'
import { HTMLIcon } from '../../../HTMLIcon'
import { ReactIcon } from '../../../ReactIcon'
import { VUEIcon } from '../../../VUEIcon'
import { TabItem } from '../TabItem'
import { TabsDesktopContainer } from './styles'

export function TabsDesktop() {
  return (
    <TabsDesktopContainer>
      <TabItem to="/">
        <ReactIcon />
        <span>Home.tsx</span>
      </TabItem>
      <TabItem to="/about">
        <VUEIcon />
        <span>About.vue</span>
      </TabItem>
      <TabItem to="/projects">
        <HTMLIcon />
        <span>Projects.html</span>
      </TabItem>
      <TabItem to="/contact">
        <CSSIcon />
        <span>Contact.css</span>
      </TabItem>
    </TabsDesktopContainer>
  )
}
