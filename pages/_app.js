import React, { useEffect } from 'react'
import { applyTheme } from '../src/theme'
import '../styles/app.scss'

function MyApp({ Component, pageProps }) {

  const color = {
    theme: {
      primary:'#41D6C3', 
      secondary: '#42A1EC', 
      default: '#DEDEDE', 
      success: '#81CF87', 
      warning: '#FFCD00', 
      danger: '#EE5454',
      dark: '#404852',
      light: '#FFFFFF'
    }
  }

  useEffect(() => {
    applyTheme(color)
  }, [color]);

  return <Component {...pageProps} />
}

export default MyApp
