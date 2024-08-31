import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import TaskApp from './Tasks/2.To-do App/app';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <TaskApp />
  </StrictMode>,
)
