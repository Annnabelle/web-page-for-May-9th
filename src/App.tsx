
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Home/>
    </BrowserRouter>
  )
}

export default App
