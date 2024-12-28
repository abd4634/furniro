import './App.css'
import Navbar from './layout/header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './component/home'
import About from './component/about'
import Shops from './component/shops'
import Contact from './component/contact'
import Footer from './layout/footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/shops' element={<Shops />} />
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
