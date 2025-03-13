import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDescription from './pages/ProductDecsiption/ProductDescription'
import ProductDisplay from './pages/ProductDisplay/ProductsDisplay'
import Cart from './pages/Cart/Cart'
import Deals from './pages/Deals/Deals'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/products'element={<ProductDisplay />} />
          <Route path='/category/product'element={<ProductDescription />} />
          <Route path='/category/:fashion' element={<ProductDisplay />} />
          <Route path='/category/:electronics' element={<ProductDisplay />} />
          <Route path='/category/:laptops' element={<ProductDisplay />} />
          <Route path='/category/:phones' element={<ProductDisplay />} />
          <Route path='/category/:health' element={<ProductDisplay />} />
          <Route path='/category/:kitchen' element={<ProductDisplay />} />
          <Route path='/cart-items' element={<Cart />} />
          <Route path='/more-deals/' element={<Deals />} />
        </Routes>
      <Footer />
    </>

  )
}

export default App
