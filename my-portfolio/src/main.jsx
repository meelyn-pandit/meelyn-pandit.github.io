import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem, } from "@chakra-ui/react";
import './index.css'
import App from './pages/App.jsx'
import {system} from './components/ui/theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider 
      value={system}
    >
      <App />
    </ChakraProvider>
  </StrictMode>,
)

