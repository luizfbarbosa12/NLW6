import { ThemeProvider } from 'styled-components'

type themeProps = {
    lightBackground: string
    darkBackground: string
    lightFont: string
    darkFont: string
}

export const theme: themeProps = {
    lightBackground: '#fff',
    darkBackground: '#202124',
    lightFont:'#000000',
    darkFont: '#dadada',
  };