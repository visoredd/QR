import React from "react";
import { Button } from "../components";
import QRcode from "../assets/qrcode2.png";
import HeroImage from "../assets/hero-image3.png";

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-[100px] custom-bg h-screen ">
      <div className="flex flex-col justify-center items-start pt-[20px]">
        <h1 className="text-[80px] font-semibold leading-[1.1] mb-[30px]">
          Create <br />
          Your Custom <br />
          QR Codes for Free{" "}
        </h1>
        <p className="text-[24px] leading-[34px] max-w-[700px] mb-[48px]">
          Create unique and high-quality QR codes effortlessly with our QR Code
          Generator. Add a personal touch by adding colors and logos, making
          your QR codes stand out. Perfect for enhancing customer engagement,
          driving traffic, and boosting sales — whether your code is scanned
          from a print medium or digitally.
        </p>
        <Button>Create QR Code</Button>
      </div>
      <div className="">
        <img
          src={HeroImage}
          alt="Hero image"
          className="max-h-[400px] max-w-[458px]"
        />
      </div>
    </div>
  );
};

export default Hero;
