import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";

import Feedback from "../Feedback/Feedback";

const InputBlock = (props) => {
  const pixelTrue = props.name === "Pixel";
  const value = pixelTrue ? props.value : props.value;
  const onChange = pixelTrue ? props.settingPixel : props.settingRem;
  const onFocus = pixelTrue ? props.focusingPixel : props.focusingRem;

  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(value);

    handleIsFeedbackOpen();
  };

  const handleIsFeedbackOpen = () => {
    setIsFeedbackOpen(true);

    setTimeout(() => {
      setIsFeedbackOpen(false);
    }, 1500);
  };

  return (
    <div className="w-full mx-auto my-4 flex flex-col justify-center items-center">
      <label htmlFor={props.id} className="h3">
        {props.name}
      </label>

      <div className="flex justify-center items-center p-4 border border-gray-600 outline-none rounded-lg bg-white">
        <input
          type="text"
          id={props.id}
          value={value}
          onChange={(event) => {
            onChange(event.currentTarget.value);
          }}
          onFocus={(event) => onFocus(event.currentTarget.value)}
          className="w-full bg-transparent text-center text-lg font-semibold outline-none border-none"
        />

        <button onClick={copyToClipboard}>
          <MdContentCopy className="text-2xl z-10" />
        </button>
      </div>

      {isFeedbackOpen && <Feedback label={props.name} value={value} />}
    </div>
  );
};

export default InputBlock;
