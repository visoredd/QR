import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1D1D1D]  ">
      <hr className=" w-full pb-[50px]" />

      <p className="text-[20px] font-medium text-center pb-[40px] text-[#fff]">
        © 2023 instantQR.com, built and powered by{" "}
        <a href="https://nabivi.com/" className="text-[20px] font-semibold">
          nabivi.com
        </a>
        . All rights reserved. <br />
      </p>
    </div>
  );
};

export default Footer;
