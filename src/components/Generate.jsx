import React from "react";
import { useState } from "react";
import { Button } from "../components";

const Generate = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex justify-center items-center gap-[100px] h-screen ">
      <div className="flex flex-col justify-center items-start pt-[20px]">
        <h1 className="text-[80px] font-semibold leading-[1.1] mb-[30px]">
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
          value={value}
          onChange={handleChange}
          placeholder="Enter URL here"
          className="w-[500px] h-[74px] border-2 border-black rounded-[20px] text-[24px] font-semibold pl-[20px] mb-[10px]"
        />
        <p className="mb-[56px] pl-[4px]">
          Link to open when scanned, e.g. https://example.com/
        </p>
        <Button>Generate QR code</Button>
      </div>
      <div className="">
        <img src="" alt="Hero image" className="max-h-[400px] max-w-[458px]" />
      </div>
    </div>
  );
};

export default Generate;
