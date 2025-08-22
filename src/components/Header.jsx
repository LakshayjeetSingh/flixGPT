import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
export default function Header() {
  const navigate = useNavigate();
  function handleSignOut() {
    const signOutPromise = signOut(auth);
    signOutPromise
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    return signOutPromise;
  }
  return (
    <div className="absolute z-10 flex w-full max-w-5xl flex-row items-end justify-between gap-6 p-2">
      <nav className="flex flex-row items-center gap-6 text-lg text-neutral-400">
        <span className="text-[30px] font-bold text-red-500">FlixGPT</span>
        <ul className="flex flex-row gap-6">
          <li>Browse</li>
          <li>Library</li>
          <li>AI Search</li>
        </ul>
      </nav>
      <Button handler={handleSignOut}>Sign Out</Button>
    </div>
  );
}
