import { TabsContainer } from './styles'
import { TabsDesktop } from './components/TabsDesktop'
import { TabMobile } from './components/TabMobile'

export function Tabs() {
  return (
    <TabsContainer>
      <TabsDesktop />
      <TabMobile />
    </TabsContainer>
  )
}
