import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormContent } from './components/FormContent'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import {FormNavbar} from './components/FormNavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormNavbar/>
      <FormContent/>
    </>
  )

}

export default App
