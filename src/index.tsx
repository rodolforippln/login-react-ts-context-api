import { Fragment } from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import App from './App'
import { AuthProvider } from './contexts/Auth/AuthProvider'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Fragment>
        <GlobalStyles />
        <App />
      </Fragment>
    </AuthProvider>
  </ThemeProvider>
)
