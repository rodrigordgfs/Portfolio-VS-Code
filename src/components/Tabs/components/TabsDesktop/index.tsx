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
        <span>Inicio.tsx</span>
      </TabItem>
      <TabItem to="/about">
        <HTMLIcon />
        <span>Sobre.html</span>
      </TabItem>
      <TabItem to="/projects">
        <VUEIcon />
        <span>Projetos.vue</span>
      </TabItem>
      <TabItem to="/contact">
        <CSSIcon />
        <span>Contato.css</span>
      </TabItem>
    </TabsDesktopContainer>
  )
}
