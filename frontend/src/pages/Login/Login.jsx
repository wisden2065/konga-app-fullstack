import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Login = () => {
    // states for login details
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    // get loggedIn state from context 
    const {loggedIn, setLoggedIn, userData, setUserData } = useContext(UserContext)

    // validate form on submit
    const validateLoginForm =(e)=>{
        e.preventDefault();
        // console.log({email:email, password:password})
        // after validation call api
        loginUser()
        

        
    }

    const loginUser = async ()=>{
        try {


            // *****CORS IN ACTION**** WITH COOKIES
            // ORIGIN and COOKIES are sent in the req header to the server
            const res = await fetch('http://localhost:8000/auth/login', 
                {
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email, password})
                }
            )
            console.log(res)
            // if the previous line gives...
            // Response {type: 'cors', url: 'http://localhost:8000/auth/login', redirected: false, status: 200, ok: true, …}
            if(!res.ok){
                throw new Error('Could not reach server. Please check your internet and try again.')
            }
            else{
                // is it the body of this readable stream that is converted to json?
                // which is that returned after the sql query???
                const data = await res.json()
                console.log('Response from server on login',data)
                if(data.status === 'success'){
                    console.log(data.status)
                    setLoggedIn(true)
                    setUserData(data.userObj)
                    // navigate to home pages
                    navigate('/')

                }
                else if(data.status ==='failed'){
                    throw new Error('Incorrect Username or Password')
                }
            }
        } catch (error) {
            if(error.message === 'Failed to fetch'){
                console.log(error.message)
                setErrorMessage('Could not establish connection with server. Please try again.')
            }
            else{
                console.log(error.message)
                console.log('Setting Error Message')
                setErrorMessage(error.message)
            }
         
          
            
        }
    }
  return (
    <div style={{marginTop:'50px'}}>
        <p style={{textAlign:'center'}}>Login</p>
        <div className="" style={{display:'flex', justifyContent:'center', }}>
        
            <form onSubmit={validateLoginForm} action="" style={{width:'300px', backgroundColor:'yellowgreen', height:'300px', padding:'20px'}}>
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter email" style={{width:'100%', height:'30px'}} />
            <label htmlFor="password">Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" style={{width:'100%', height:'30px'}}/>
            <button type='submit'>Submit</button>
            <p>Don't have an account? <NavLink to='/signup'>Signup</NavLink></p>
            <span className='text-danger' style={{fontSize:'12px'}}>{errorMessage}</span>
            </form>
           
        </div>
        
    </div>
  )
}

export default Login
