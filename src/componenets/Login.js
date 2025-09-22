import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validation logic for form
    const errMsg = checkValidData(
      email.current.value,
      password.current.value,
      name,
      isSignInForm
    );
    setErrorMessage(errMsg);

    if (errMsg) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaSDR-kTPhPYcVVGSsV0jC3D-Q5HZSFE6fjzAM-4cMpltx1Gw9AV7OTnL8sYnC6CBxOBZQEAJLjStt822uD2lctOvNR05qM.png?r=962",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browser");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    }
  };

  return (
    <div className='relative h-screen w-screen'>
      <Header />
      <div className='absolute inset-0'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_small.jpg'
          alt='Netflix-background'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='w-3/12 p-12 bg-black bg-opacity-80 rounded-xl'
        >
          <h1 className='font-bold text-white m-2 py-4 text-4xl'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            ref={email}
            className='w-full p-4 m-2 bg-gray-800 text-white rounded'
            type='text'
            placeholder='Email or mobile number'
          />
          {!isSignInForm && (
            <input
              ref={name}
              className='w-full p-4 m-2 bg-gray-800 text-white rounded'
              type='text'
              placeholder='Full Name'
            />
          )}
          <input
            ref={password}
            className='w-full p-4 m-2 bg-gray-800 text-white rounded'
            type='password'
            placeholder='Password'
          />
          <p className='text-red-600 p-2 font-bold text-lg'>{errorMessage}</p>
          <button
            className='w-full p-5 m-2 bg-red-600 text-white rounded hover:bg-red-700 text-2xl'
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className='text-white py-4 m-2 hover:text-red-300 cursor-pointer'
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
