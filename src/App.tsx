import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './Router'
import ContextCoffe from './context'

function App() {


  return (
    <>
      <BrowserRouter>
        <ContextCoffe>
          <Router />
        </ContextCoffe>
      </BrowserRouter>
    </>
  )
}

export default App
