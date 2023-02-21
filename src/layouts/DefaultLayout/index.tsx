import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import Drawer from 'react-modern-drawer'
import { useContext } from 'react'
import { SettingsContext } from '../../contexts/SettingsContext'
import { DefaultLayoutContainer, MenuWrapper, OutletContainer } from './styles'

export function DefaultLayout() {
  const { isDrawerOpen, toogleDrawer } = useContext(SettingsContext)

  return (
    <>
      <Header />
      <DefaultLayoutContainer>
        <Drawer
          open={isDrawerOpen}
          onClose={toogleDrawer}
          direction="left"
          overlayOpacity={0.8}
          size={60}
        >
          <Menu />
        </Drawer>
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
        <OutletContainer />
      </DefaultLayoutContainer>
      <Footer />
    </>
  )
}
