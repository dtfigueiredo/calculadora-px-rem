import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";

import InputBlock from "../InputBlock/InputBlock";

const Calculator = () => {
  const [pixel, setPixel] = useState(16);
  const [rem, setRem] = useState(1);

  const handlePixelFocus = () => {
    setPixel("");
  };

  const handlePixelChange = (newPixel) => {
    let isnum = /^[\d.?!]+$/.test(newPixel);

    if (isnum) {
      setPixel(newPixel);
      let newRemValue = newPixel / 16;
      setRem(newRemValue);
    } else {
      setPixel("");
    }
  };

  const handleRemFocus = () => {
    setRem("");
  };

  const handleRemChange = (newRem) => {
    let isnum = /^[\d.?!]+$/.test(newRem);

    if (isnum) {
      setRem(newRem);
      let newPixelValue = newRem * 16;
      setPixel(newPixelValue);
    } else {
      setRem("");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <InputBlock
        value={pixel}
        id="pixel"
        name="Pixel"
        settingPixel={handlePixelChange}
        focusingPixel={handlePixelFocus}
      />

      <FiRefreshCw className="mt-8 text-4xl sm:text-6xl rotate-90 sm:rotate-0" />

      <InputBlock value={rem} id="rem" name="REM" settingRem={handleRemChange} focusingRem={handleRemFocus} />
    </div>
  );
};

export default Calculator;
