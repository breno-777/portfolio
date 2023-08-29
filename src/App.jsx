import { BrowserRouter } from 'react-router-dom'
import { Body__App } from './App.style'
import { NavBar } from "./components/NavBar/NavBar"
import { MobileNavBar } from "./components/NavBar/Mobile/MobNavBar"
import Scroll from './components/Scroll/Scroll'
import Footer from './components/Footer/footer'

import Home from './pages/Home/Home'
import Skills from './pages/Skills/Skills'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contatc'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div className='contents'>
      <div className='Square-01'></div>
      <Body__App>
        <BrowserRouter>

          <NavBar />
          <MobileNavBar />

          <Home />
          <Scroll />

          <Skills />
          <Scroll />

          <Services />
          <Scroll />

          <Contact />
          <Footer />

        </BrowserRouter>
      </Body__App>
    </div>
  )
}

export default App
