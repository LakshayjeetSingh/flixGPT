import { useEffect } from "react";
import LoginPageForm from "./LoginPageForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function login() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/browse");
    }
  }, []);

  return (
    <div className="jusitfy-between relative flex min-h-full flex-col items-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg)] bg-cover bg-fixed">
      <div className="absolute inset-0 z-1 bg-black opacity-60" />
      <div className="z-10 mb-20 w-full max-w-4xl p-4 text-[40px] font-bold text-red-600">
        <span>FlixGPT</span>
      </div>
      <LoginPageForm />
    </div>
  );
}
