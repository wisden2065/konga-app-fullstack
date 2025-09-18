import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import ProductDescription from './pages/ProductDecsiption/ProductDescription'
import ProductDisplay from './pages/ProductDisplay/ProductsDisplay'
import Cart from './pages/Cart/Cart'
import Deals from './pages/Deals/Deals'
import SignupForm from './pages/Signup/SignupForm'
import Login from './pages/Login/Login'
import { MyUserContext } from './context/UserContext'
import { useContext, useEffect } from 'react'
import { ProductContext } from './context/ProductContext'

function App() {
 
  // get current UL to hide navbar on signup page 
    const location = useLocation()

    // get the product context so we can set the sate of the cart list returned from the server
    const {} = useContext(ProductContext)

    // async func to get all cart items from the server
    const fetchCartItems = async()=>{
      try {

        // *************CORS IN ACTION****************
        // for all COReq like this GET req, the browser will 
        // adds the origin header to any Js COReq
        // the API will respond with an Access-Control-Allow-origin header which matches the origin of this req or *
        // The browser validates that the origin returned by te API matches that of the webpage-frontend
        // it then returns the res  to the JS code which displays the res body
        const res = await fetch('http://localhost:8000/cart');
        if(!res.ok){
          throw new Error('Error fetching cartItems')
        } 
        const data = await res.json()
        if(data.status === 'success'){
        }

      } catch (error) {
        
      }
    }
    // fetch products in cart from server as soon as app mounts 
    useEffect(()=>{
      // call the fetch function
      fetchCartItems()
    }, [])
    

  return (
    <>
    <MyUserContext>
      {/* {!location.pathname ==='/account/signup'?<Navbar />:""} */}
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
          <Route path='/account/signup' element={<SignupForm />} />
          <Route path='/auth/login' element={<Login />} />
        </Routes>
      <Footer />
    </MyUserContext>
    </>

  )
}

export default App
    