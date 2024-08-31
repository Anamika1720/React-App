import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './Tasks/1.Form-using-object/form.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <Form />
  </StrictMode>,
)
