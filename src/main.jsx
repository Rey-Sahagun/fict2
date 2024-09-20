import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import Promesa1 from './functions/Promesa1.jsx';
import './index.css';
// import MyPromises from './functions/MyPromises.jsx';
import MyPromisesAll from './functions/MyPromises.jsx';
import MyPromisesRace from './functions/MyPromises.jsx';
import MyFetchsAPIs from './functions/MyFetchs.jsx';
import MyFetchPost from './functions/MyFetchPost.jsx';
import MyFetchPut from './functions/MyFetchPut.jsx';
import MyFetchBlob from './functions/MyFetchBlob.jsx';
import MyObjects from './methods/MyDataTypes.jsx';
import { Contador } from './components/Contador.jsx';
import { ContadorHook } from './components/ContadorHook'; // Importamos el componente ContadorHook
import { Login } from './components/Login'; // Asegúrate de que Login.jsx existe
import { Usuarios } from './components/Usuarios'; // Importamos el componente Usuarios
import { Formularios } from './components/Formularios.jsx'; // Importamos el componente Formularios

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Promesa1 /> */}
    {/* <MyPromises /> */}
    {/* <MyPromisesRace /> */}
    {/* <MyPromisesAll /> */}
    {/* <MyFetchsAPIs /> */}
    {/* <MyFetchPost /> */}
    {/* <MyFetchPut /> */}
    {/* <MyFetchBlob /> */}
    <MyObjects />
    <Contador />
    <ContadorHook />
    <Login />
    <Usuarios />
    <Formularios />
  </StrictMode>
);
