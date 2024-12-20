import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Products from './pages/Products/Products'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/products'element={<Products />} />
          <Route path='/category/product/' element={<Cart />} />
        </Routes>
      <Footer />
    </>

  )
}

export default App
