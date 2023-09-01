import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("/images/bg-netflix.jpg")`,
      }}
    >
      <Header />
      <div className="mt-40 text-white opacity-90 mx-auto right-0 top-0 left-0 absolute bg-black p-16 rounded-md w-1/3">
        {/* <img
          alt="background-image"
          aria-hidden="true"
          // src="/images/bg-netflix.jpg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        ></img> */}
        <h1 className="text-4xl pb-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        <form>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Enter Full Name"
              className="p-4 my-2 w-full rounded-sm bg-gray-800 "
            ></input>
          )}
          <input
            type="text"
            placeholder="Enter Email"
            className="p-4 my-2 w-full rounded-sm bg-gray-800 "
          ></input>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            className="p-4 my-2 w-full rounded-sm bg-gray-800 "
          ></input>
          <br />
          <button
            type="submit"
            className="p-3 text-xl my-2 rounded-md bg-red-800 w-full"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          {
            <p
              className="text-lg mt-10 cursor-pointer"
              onClick={() => toggleSignUp()}
            >
              {isSignIn ? (
                <span className="text-gray-600">New to Netflix ? </span>
              ) : (
                <span className="text-gray-600">Already registered ? </span>
              )}
              {isSignIn ? "Sign up now" : "Sign in"}
            </p>
          }
        </form>
      </div>
    </div>
  );
};

export default Login;
