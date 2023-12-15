import React from "react";

function Button({ children, className }) {
  return (
    <button
      type="submit"
      className={`${className} text-[18px] text-white font-medium bg-[#000] hover:bg-[#333333] rounded-[40px] py-[17px] px-[29px]
      `}
    >
      {children}
    </button>
  );
}
export default Button;
