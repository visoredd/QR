import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";

import { Button } from "../components";
import QRcode from "../assets/qrcode2.png";
import HeroImage from "../assets/hero-image3.png";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="flex justify-center items-center gap-[100px] custom-bg h-screen "
    >
      <div className="flex flex-col justify-center items-start pt-[20px]">
        <h1 className="text-[72px] font-semibold leading-[1.1] mb-[30px]">
          Create <br />
          Your Custom <br />
          QR Codes for Free{" "}
        </h1>
        <p className="text-[24px] leading-[34px] max-w-[660px] mb-[48px]">
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
    </motion.div>
  );
};

export default Hero;
