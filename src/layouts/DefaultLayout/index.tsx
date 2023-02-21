import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import { DefaultLayoutContainer, OutletContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <DefaultLayoutContainer>
        <Menu />
        <OutletContainer />
      </DefaultLayoutContainer>
      <Footer />
    </>
  )
}
