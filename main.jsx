import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyFetchAPIs from './fuctions/MyFetchAPIs.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MyFetchAPIs/>
  </StrictMode>,
);

console.log("¡Hola Mundo!");