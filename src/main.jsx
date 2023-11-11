import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


//extend the theme

const colors = {
  brand: {
    100: "#0000FF",
    200: "#0000AA",
    300: "#000088",
    400: "#000077",
    500: "#000066",
  }
}

const fonts = {
  body:"Tahoma",
  heading:"Courier New"
}

const theme = extendTheme({colors,fonts});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
