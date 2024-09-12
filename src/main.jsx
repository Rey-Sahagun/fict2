import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import Promesa1 from './functions/Promesa1.jsx'
import './index.css'
//import MyPromises from './functions/MyPromises.jsx'
import MyPromisesAll from './functions/MyPromises.jsx'
import MyPromisesRace from './functions/MyPromises.jsx';
import MyFetchsAPIs from './functions/MyFetchs.jsx';
import MyFetchPost from './functions/MyFetchPost.jsx'; // Importa MyFetchPost
import MyFetchPut from './functions/MyFetchPut.jsx';   // Importa MyFetchPut

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Promesa1 /> */}
    {/*<MyPromises/> */}
    {/*<MyPromisesRace/>*/}
    {/* <MyPromisesAll/>*/}
    {/*<MyFetchsAPIs />
    <MyFetchPost />*/ } 
    <MyFetchPut />   
  </StrictMode>,
);
