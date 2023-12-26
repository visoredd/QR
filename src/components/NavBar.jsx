import React from "react";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center pt-[20px]">
      <a href="#">
        <img src={Logo} alt="instantQR logo" className="w-auto h-[50px]" />
      </a>
      {/* <ul className="flex gap-[20px]">
        <li>About</li>
        <li>Login</li>
        <li>SIGN UP</li>
        <li></li>
      </ul> */}
    </div>
  );
};

export default NavBar;
