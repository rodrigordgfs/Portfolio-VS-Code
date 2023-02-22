import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import Drawer from 'react-modern-drawer'
import { useContext } from 'react'
import { SettingsContext } from '../../contexts/SettingsContext'
import { Outlet } from 'react-router-dom'
import {
  ContentContainer,
  DefaultLayoutContainer,
  DefaultLayoutContent,
  MenuWrapper,
} from './styles'
import { Tabs } from '../../components/Tabs'

export function DefaultLayout() {
  const { isDrawerOpen, toogleDrawer } = useContext(SettingsContext)

  const numberList = Array.from(Array(100).keys())

  return (
    <>
      <Header />
      <DefaultLayoutContainer>
        <Drawer
          open={isDrawerOpen}
          onClose={toogleDrawer}
          direction="left"
          overlayOpacity={0.8}
          size={260}
        >
          <Menu />
        </Drawer>
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
        <DefaultLayoutContent>
          <Tabs />
          <ContentContainer>
            <div>
              {numberList.map((number) => {
                return <p key={number}>{number}</p>
              })}
            </div>
            <Outlet />
          </ContentContainer>
        </DefaultLayoutContent>
      </DefaultLayoutContainer>
      <Footer />
    </>
  )
}
