import React from "react";
import Header from "./Header";
import LoginPageForm from "./LoginPageForm";
export default function login() {
  return (
    <div className="jusitfy-between relative flex h-full flex-col items-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg)] bg-cover">
      <div className="absolute inset-0 z-1 bg-black opacity-60" />
      <Header />
      <LoginPageForm />
    </div>
  );
}
