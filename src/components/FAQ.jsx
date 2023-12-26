import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";
import Line from "../assets/line2.png";
import DropDown from "../assets/dropdown.svg";

const FAQtext = [
  {
    text: "Is it really free to create QR codes on instantQR.net?",
    longText:
      "Yes, creating basic QR codes on instantQR.net is completely free. You can generate high-quality QR codes without any cost.",
  },
  {
    text: "Can I customize my QR codes on instantQR.net?",
    longText:
      "Absolutely! You can personalize your QR codes by adding colors, images, or logos to align them with your brand or specific message.",
  },
  {
    text: "How do I create a QR code on instantQR.net?",
    longText:
      "Simply paste a URL into the designated field on our website and click 'Generate QR code'. You can then customize your QR code as needed.",
  },
  {
    text: "What can I link to my QR code?",
    longText:
      "You can link any URL to your QR code. This could be your website, a specific product page, a digital business card, or any online content you wish to share.",
  },
  {
    text: "Can the QR codes created on instantQR.net be used for commercial purposes?",
    longText:
      "Yes, the QR codes you create are perfect for enhancing customer engagement, driving traffic, and boosting sales. They can be used in both print and digital media for your business needs.",
  },
  {
    text: "Are my QR codes stored on instantQR.net after creation?",
    longText:
      "No, your QR codes are not stored on our servers. They are generated instantly for your immediate use and are not retained on our system, ensuring your privacy and security. Any QR code created is automatically deleted from our system after a short period.",
  },
];

const FAQcontent = ({ text, longText }) => {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <div className="mb-[52px]">
      <div
        className="flex flex-row justify-between cursor-pointer"
        onClick={handleToggle}
      >
        <p className="text-[20px] font-medium ">{text}</p>
        <img src={DropDown} alt="Arrow" className="w-[28px] h-auto" />
      </div>
      <p
        className={`max-w-[1147px] ${
          open ? "" : "hidden"
        } text-[20px] pb-[10px]`}
      >
        {longText}{" "}
      </p>
      <img src={Line} alt="Line" className="w-[1147px] h-[2px] mt-[10px]" />
    </div>
  );
};

const FAQ = () => {
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
      className="px-[20px] sm:px-0 flex flex-col justify-center items-center bg-[#EDEEF4] min-h-screen h-auto py-[100px] !px-[50px]"
    >
      <h2 className="text-[36px] leading-[1.1] sm:text-[60px] font-semibold mb-[77px]">
        Most Frequently Asked Questions{" "}
      </h2>
      {FAQtext.map((FAQ, index) => {
        return (
          <FAQcontent key={index} text={FAQ.text} longText={FAQ.longText} />
        );
      })}
    </motion.div>
  );
};

export default FAQ;
