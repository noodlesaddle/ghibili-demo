import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import './assets/tailwind-generated.css'
import CustomCursor from 'components/common/CustomCursor'

function App() {
  return (
    <BrowserRouter>
      <Router />
      <CustomCursor />
    </BrowserRouter>
  )
}

export default App
