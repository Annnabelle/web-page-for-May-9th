
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import Footer from './components/footer'
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Home/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
