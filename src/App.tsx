import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Router } from './router'
import { SettingsContextProvider } from './contexts/SettingsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <SettingsContextProvider>
          <Router />
        </SettingsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
