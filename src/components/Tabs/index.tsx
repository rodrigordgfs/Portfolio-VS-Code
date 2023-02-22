import {
  CSSIcon,
  HTMLIcon,
  ReactIcon,
  TabItem,
  TabsContainer,
  VUEIcon,
} from './styles'
import useIsActiveRoute from '../../hook/useIsActiveRoute'

export function Tabs() {
  return (
    <TabsContainer>
      <TabItem active={useIsActiveRoute('/')} to="/">
        <ReactIcon />
        <span>Home.tsx</span>
      </TabItem>
      <TabItem active={useIsActiveRoute('/about')} to="/about">
        <VUEIcon />
        <span>About.vue</span>
      </TabItem>
      <TabItem active={useIsActiveRoute('/projects')} to="/projects">
        <HTMLIcon />
        <span>Projects.html</span>
      </TabItem>
      <TabItem active={useIsActiveRoute('/contact')} to="/contact">
        <CSSIcon />
        <span>Contact.css</span>
      </TabItem>
    </TabsContainer>
  )
}
