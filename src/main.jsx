import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import TodoAnimation from './Tasks/3Animation Reaction/Todo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
   <TodoAnimation />
  </StrictMode>,
)
