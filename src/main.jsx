import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
//import  Todo from "./Tasks/3.Animation Reaction/Todo"
import Login from './Tasks/4.Netflix Login Page/login.Component';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
   <Login />
  </StrictMode>,
)
