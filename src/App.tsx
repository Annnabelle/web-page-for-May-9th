
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Router from './routes'
import ScrollToTop from './scrollToTop'
function App() {

  return (
    <BrowserRouter>
     <ScrollToTop />
      <Header/>
      <Router/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
