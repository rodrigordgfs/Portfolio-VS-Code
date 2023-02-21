import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Router } from './router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
