// import React from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
import {useContext, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


const SignupForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()



  const handleForm = (e)=>{
    e.preventDefault();
    console.log({name: name, email:email, password:password})

    // after form validation by frontend
    sendSignupDetail()

  }
  const sendSignupDetail = async()=>{
    
    try {
          const res = await fetch('http://localhost:8000/auth/signup',
            {
              method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body: JSON.stringify({name, email, password})
            }
          )
      
          // see the response-- which is an Object containing more than the body(res returned by server)??
          console.log('Response from signup:', res)
          if(!res.ok){
            throw new Error('Failed to connect with server on attempt to signup!!')

          }
          // are we extracting the data in the readable stream in the body of the response?
          const data = await res.json();
          console.log(data)
          alert('Signup successful. Navigating to Login page')
          // then redirect user to login
          if(data.status === 'success'){
            
            navigate('/auth/login')
          } 
          else{
            throw new Error('Please try again later...')
          }

    } catch (error) {
        console.log(error.message)
    }
  
  }
  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    //   <Card className="w-full max-w-md p-6 rounded-2xl shadow-md bg-white">
    //     <CardContent>
    //       <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

    //       <form className="space-y-4">
    //         <div>
    //           <Label htmlFor="firstName">First Name</Label>
    //           <Input id="firstName" type="text" placeholder="Enter your first name" required />
    //         </div>

    //         <div>
    //           <Label htmlFor="lastName">Last Name</Label>
    //           <Input id="lastName" type="text" placeholder="Enter your last name" required />
    //         </div>

    //         <div>
    //           <Label htmlFor="email">Email Address</Label>
    //           <Input id="email" type="email" placeholder="Enter your email" required />
    //         </div>

    //         <div>
    //           <Label htmlFor="phone">Phone Number</Label>
    //           <Input id="phone" type="tel" placeholder="Enter your phone number" required />
    //         </div>

    //         <div>
    //           <Label htmlFor="password">Password</Label>
    //           <Input id="password" type="password" placeholder="Create a password" required />
    //         </div>

    //         <Button className="w-full mt-4" type="submit">Create Account</Button>
    //       </form>

    //       <p className="text-sm text-center text-gray-600 mt-6">
    //         Already have an account? <a href="/account/login" className="text-pink-600 hover:underline">Login</a>
    //       </p>
    //     </CardContent>
    //   </Card>
    // </div>
    <div style={{marginTop:'50px'}}>
        <p style={{textAlign:'center'}}>Signup</p>
      <div className="bg-primary" style={{display:'flex', justifyContent:'center', }}>
      
        <form onSubmit={handleForm} action="" style={{width:'300px', backgroundColor:'green', height:'300px', padding:'20px'}}>
          <label htmlFor="name">First Name</label>
          <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter First Name" style={{width:'100%', height:'30px'}} />
          <label htmlFor="name">Last Name</label>
          <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter Last Name" style={{width:'100%', height:'30px'}} />
          <label htmlFor="email">Email</label>
          <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter email" style={{width:'100%', height:'30px'}} />
          <label htmlFor="password">Password</label>
          <input onChange={(e)=>{setPassword(e.target.value)}} type="password" style={{width:'100%', height:'30px'}}/>
          <button type='submit'>Submit</button>
          <p>Already have an account? <NavLink to='/auth/login'>Signin</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;