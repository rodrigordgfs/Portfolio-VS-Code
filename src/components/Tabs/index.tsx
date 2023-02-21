import {
  CSSIcon,
  HTMLIcon,
  ReactIcon,
  TabItem,
  TabsContainer,
  VUEIcon,
} from './styles'

export function Tabs() {
  return (
    <TabsContainer>
      <TabItem isActive>
        <ReactIcon />
        <span>Home.tsx</span>
      </TabItem>
      <TabItem isActive={false}>
        <VUEIcon />
        <span>About.css</span>
      </TabItem>
      <TabItem isActive={false}>
        <HTMLIcon />
        <span>Projects.html</span>
      </TabItem>
      <TabItem isActive={false}>
        <CSSIcon />
        <span>Contact.html</span>
      </TabItem>
    </TabsContainer>
  )
}
