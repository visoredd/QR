import React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "../components";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";
import QRCode from "qrcode";

const Generate = () => {
  // const [value, setValue] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const generateQrCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err);
      console.log(url);
      setQrCode(url);
    });
  };

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
      className="flex justify-center items-center gap-[100px] h-screen bg-[#EDEEF4] "
    >
      <div className="flex flex-col justify-center items-start pt-[20px]">
        <h1 className="text-[72px] font-semibold leading-[1.1] mb-[30px]">
          Effortless QR Code <br />
          Creation in Moments
        </h1>
        <p className="text-[24px] leading-[34px] max-w-[600px] mb-[48px]">
          Easily generate your QR code by pasting a URL.
          <br />
          Personalize your QR code by adding colors, images, or logos to make it
          align with your brand or message.
        </p>
        <input
          type="text"
          value={url}
          onChange={handleChange}
          placeholder="Enter URL here"
          className="w-[500px] h-[74px] border-2 border-black rounded-[20px] text-[24px] font-semibold pl-[20px] mb-[10px] bg-[#EDEEF4]"
        />
        <p className="mb-[56px] pl-[4px]">
          Link to open when scanned, e.g. https://example.com/
        </p>
        <button onClick={generateQrCode}>Generate QR code</button>
      </div>
      <div className="">
        {<img src={qrCode} alt="QR code" className="w-[400px]" />}
      </div>
    </motion.div>
  );
};

export default Generate;
