import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(! isSignInForm);
  }

  return (
    <div className="relative h-screen w-screen">
      <Header/>
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_small.jpg"
          alt="Netflix-background"
          className="h-full w-full object-cover"
        />
      </div>
       <div className="absolute inset-0 flex items-center justify-center">
        <form className="w-3/12 p-12 bg-black bg-opacity-80 rounded-xl">
          <h1 className='font-bold text-white m-2 py-4 text-4xl'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            className="w-full p-4 m-2 bg-gray-800 text-white rounded"
            type="text"
            placeholder="Email or mobile number"
          />
          {
            !isSignInForm && <input
            className="w-full p-4 m-2 bg-gray-800 text-white rounded"
            type="text"
            placeholder="Full Name"
          />
          }
          <input
            className="w-full p-4 m-2 bg-gray-800 text-white rounded"
            type="password"
            placeholder="Password"
          />
          <button className="w-full p-5 m-2 bg-red-600 text-white rounded hover:bg-red-700 text-2xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className='text-white py-4 m-2 hover:text-red-300 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login