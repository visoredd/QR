import React from "react";

function Button({ children, className, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`${className} text-[18px] text-white font-medium bg-[#000] hover:bg-[#333333] rounded-[40px] py-[17px] px-[29px] 
      `}
    >
      {children}
    </button>
  );
}
export default Button;
