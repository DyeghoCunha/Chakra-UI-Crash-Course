import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


//extend the theme

const colors = {
  bgPage: "#24262F",
  bgCard: "#383A47",
  bgUse: "#24262F",
  button: "#E87D01",
  float1: "#008000",
  float2: "#48C774",
  float3: "#FFDD57",
  float4: "#F14668",
  float5: "#B11736"
}


const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
