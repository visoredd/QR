import React, { useState, useRef, useEffect } from "react";
import { Button } from "../components";
import { motion, useInView, useAnimation } from "framer-motion";
import QrCodeWithLogo from "qrcode-with-logos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const Generate = () => {
  const ref = useRef(null);
  const canvasRef = useRef(null); // Ref for the canvas element
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  const [url, setUrl] = useState("");
  const [logo, setLogo] = useState(null); // State for logo upload
  const [isQrCodeGenerated, setIsQrCodeGenerated] = useState(false); // State to track QR code generation

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => setLogo(e.target.result);
    reader.readAsDataURL(file);
  };

  const generateQrCode = () => {
    new QrCodeWithLogo({
      canvas: canvasRef.current,
      content: url,
      width: 400,
      logo: {
        src: logo,
        logoSize: 0.32, // Customize logo size
        // Other logo options...
      },
      nodeQrCodeOptions: {
        margin: 1,
        color: {
          dark: "#010599FF",
          light: "#FFF",
        },
      },
    })
      .toCanvas()
      .then(() => {
        setIsQrCodeGenerated(true); // Set the state to true once QR code is generated
      });
  };

  const downloadQrCode = () => {
    if (canvasRef.current) {
      const image = canvasRef.current.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "qrcode.png";
      link.href = image;
      document.body.appendChild(link); // Required for Firefox
      link.click();
      document.body.removeChild(link); // Clean up
    }
  };
  const fileInputRef = useRef(null);

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
      className="flex justify-center items-center gap-[100px] h-screen bg-[#EDEEF4]"
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
        <p className="mb-[20px] pl-[4px]">
          Link to open when scanned, e.g. https://example.com/
        </p>
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center hover:bg-black hover:bg-opacity-25 rounded-[10px] py-[16px] px-[12px] mb-[20px] cursor-pointer"
        >
          <FontAwesomeIcon icon={faCloudArrowUp} size="2x" />
          <span className="ml-3 text-[18px] text-[#000] font-semibold">
            Add logo (square format)
          </span>
        </label>

        <input
          id="file-upload"
          type="file"
          onChange={handleLogoUpload}
          className="hidden"
          accept="image/*"
          ref={fileInputRef}
        />

        <Button onClick={generateQrCode}>Generate QR code</Button>
      </div>

      <div className="flex flex-col items-center">
        <canvas ref={canvasRef} className="w-[400px] h-[400px]" />

        {isQrCodeGenerated && (
          <Button className="max-w-[160px] mt-[50px]" onClick={downloadQrCode}>
            Download
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default Generate;
