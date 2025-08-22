import React, { useState, useRef } from "react";
import validateCredentials from "../utils/validateCredentials";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
export default function LoginPageForm() {
  const navigate = useNavigate();
  const [isSigningIn, setIsSigningIn] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userNameRef = useRef(null);

  const [errorMsg, setErrorMsg] = useState(null);

  const handleformSubmit = (e) => {
    const email = emailRef.current.value.trim();
    const pass = passwordRef.current.value.trim();
    const error = validateCredentials(email, pass);
    setErrorMsg(error);
    if (error) return Promise.resolve(null);
    if (!isSigningIn) {
      const signUpPromise = createUserWithEmailAndPassword(auth, email, pass);
      signUpPromise
        .then((userCredential) => {
          const user = userCredential.user;

          navigate("/browse");
        })
        .catch((error) => {
          setErrorMsg(error.code);
        });
      return signUpPromise;
    } else {
      const signInPromise = signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...

          navigate("/browse");
        })
        .catch((error) => {
          setErrorMsg(error.code);
        });
      return signInPromise;
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="z-10 flex w-full max-w-[90vw] min-w-[fit-content] flex-col justify-between gap-4 rounded-lg bg-black p-10 md:w-1/3"
    >
      <h2 className="text-3xl font-bold text-neutral-300">
        {isSigningIn ? "Sign In" : "Sign up"}
      </h2>
      <input
        ref={emailRef}
        className="rounded-sm bg-neutral-500 p-2"
        name="email"
        id="email"
        placeholder="Email"
      />
      <input
        ref={passwordRef}
        className="rounded-sm bg-neutral-500 p-2"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <span className="relative">
        <p className="absolute -top-2 pl-1 text-sm text-red-500">{errorMsg}</p>
      </span>
      <Button handler={handleformSubmit} variant={"login"}>
        {isSigningIn ? "Login" : "SignUp"}
      </Button>
      {isSigningIn ? (
        <span>
          New to FlixGPT?{" "}
          <button
            onClick={() => setIsSigningIn((prev) => !prev)}
            type="button"
            className="cursor-pointer"
          >
            <u>Sign Up</u>
          </button>{" "}
          now{" "}
        </span>
      ) : (
        <span>
          Already have an account?{" "}
          <button
            onClick={() => setIsSigningIn((prev) => !prev)}
            type="button"
            className="cursor-pointer"
          >
            <u>Login</u>
          </button>{" "}
        </span>
      )}
    </form>
  );
}
