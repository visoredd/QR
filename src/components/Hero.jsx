import React from "react";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";

import { Button } from "../components";
import QRcode from "../assets/qrcode2.png";
import HeroImage from "../assets/hero-image.png";

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
      className="flex flex-col sm:flex-row justify-center items-center gap-[100px] sm:custom-bg min-h-screen h-auto py-[100px] px-[50px] "
    >
      <div className="flex flex-col justify-center items-start pt-[20px] ">
        <h1 className="text-[36px] sm:text-[68px] font-semibold leading-[1.1] mb-[30px]">
          Create{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          Your Custom{" "}
          <span className="hidden sm:inline">
            <br />{" "}
          </span>
          QR Codes for Free{" "}
        </h1>
        <p className="text-[20px] sm:text-[18px] leading-[24px] sm:leading-[30px] max-w-[640px] mb-[48px]">
          Create unique and high-quality QR codes effortlessly with our QR Code
          Generator. Add a personal touch by adding colors and logos, making
          your QR codes stand out. Perfect for enhancing customer engagement,
          driving traffic, and boosting sales — whether your code is scanned
          from a print medium or digitally.
        </p>
        <a href="#generate-section">
          <Button>Create QR Code</Button>
        </a>
      </div>
      <div className="">
        <img
          src={HeroImage}
          alt="Hero image"
          className="max-h-[300px] max-w-[358px] sm:max-h-[400px] sm:max-w-[458px]"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
