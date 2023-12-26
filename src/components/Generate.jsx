import React, { useState, useRef, useEffect } from "react";
import { Button } from "../components";
import { motion, useInView, useAnimation } from "framer-motion";
import QrCodeWithLogo from "qrcode-with-logos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import ScanMe from "../assets/scanme.png";

const Generate = () => {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  const [url, setUrl] = useState("");
  const [logo, setLogo] = useState(null);
  const [isQrCodeGenerated, setIsQrCodeGenerated] = useState(false);

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

  const [mainColor, setMainColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");

  const [fileFormat, setFileFormat] = useState("png");

  const generateQrCode = () => {
    new QrCodeWithLogo({
      canvas: canvasRef.current,
      content: url,
      width: 1000,
      logo: {
        src: logo || ScanMe,
        logoSize: 0.32,
      },
      nodeQrCodeOptions: {
        margin: 1,
        color: {
          dark: mainColor,
          light: bgColor,
        },
      },
    })
      .toCanvas()
      .then(() => {
        setIsQrCodeGenerated(true);
      })
      .catch((error) => {
        console.error("Error generating QR code: ", error);
      });
  };

  const downloadQrCode = () => {
    if (canvasRef.current) {
      let image;
      let fileExtension = fileFormat;
      if (fileFormat === "svg") {
      } else {
        image = canvasRef.current.toDataURL(`image/${fileFormat}`);
      }

      const link = document.createElement("a");
      link.download = `qrcode.${fileExtension}`;
      link.href = image;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
      className="flex flex-col md:flex-row justify-center items-center gap-[100px] bg-[#EDEEF4] min-h-screen h-auto py-[100px] px-[50px]"
    >
      <div
        id="generate-section"
        className="flex flex-col justify-center items-start pt-[20px]"
      >
        <h1 className="text-[36px] sm:text-[60px] font-semibold leading-[1.1] mb-[30px]">
          Effortless QR Code{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          Creation in Moments
        </h1>
        <p className="text-[20px] leading-[24px] sm:leading-[30px] max-w-[500px] mb-[48px]">
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
          className="w-auto sm:w-[500px] h-[74px] border-2 border-black rounded-[20px] text-[20px] font-semibold pl-[20px] mb-[10px] bg-[#EDEEF4]"
        />
        <p className="mb-[20px] pl-[4px] text-[14px]">
          Link to open when scanned, e.g. https://instantQR.net/
        </p>
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center hover:bg-black hover:bg-opacity-25 rounded-[10px] py-[16px] px-[12px] mb-[20px] cursor-pointer"
        >
          <FontAwesomeIcon icon={faCloudArrowUp} size="2x" />
          <span className="ml-3 text-[16px] text-[#000] font-semibold">
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
        {logo && (
          <div className="flex items-center">
            <img
              src={logo}
              alt="Uploaded Logo"
              className="w-20 h-20 object-contain mr-4"
            />
            <button onClick={() => setLogo(null)}>❌</button>
          </div>
        )}
        <div>
          <p className="mr-3 mb-[4px] text-[16px] text-[#000] font-medium">
            Customize the appearance of your QR code:
          </p>
          <div className="mb-[4px] flex items-center">
            <label className="mr-3 text-[16px]">Foreground color:</label>
            <input
              type="color"
              value={mainColor}
              onChange={(e) => setMainColor(e.target.value)}
            />
          </div>

          <div className="mb-[4px] flex items-center">
            <label className="mr-2 text-[16px]">Background color:</label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
          <div className="mb-[20px]">
            <label htmlFor="file-format" className="mr-2 text-[16px]">
              File Format:
            </label>
            <select
              id="file-format"
              value={fileFormat}
              onChange={(e) => setFileFormat(e.target.value)}
              className="border-2 border-black rounded"
            >
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="svg">SVG</option>
            </select>
          </div>
        </div>

        <Button onClick={generateQrCode}>Generate QR code</Button>
      </div>

      <div className="flex flex-col items-center">
        <canvas
          ref={canvasRef}
          className="max-w-[360px] max-h-[360px] sm:!w-[400px] sm:!h-[400px]"
        />

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
