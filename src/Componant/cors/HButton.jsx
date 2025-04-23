import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function HButton({ children, Active, linkto }) {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token); 

  const handleClick = () => {
    console.log("Button Clicked");
    console.log("Current Token:", token);

    if (!token) {
      navigate("/login"); 
    } else {
      navigate("/catalog"); 
    }
  };

  return (
    <button
      className={`text-center text-[13px] px-6 py-3 rounded-md font-semibold 
      ${Active ? "bg-[#FFD60A] text-black" : "bg-[#161D29]"} 
      hover:scale-95 transition-all duration-200 text-[18px]`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default HButton;
