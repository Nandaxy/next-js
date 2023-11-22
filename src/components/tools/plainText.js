"use client"

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

const PlainText = ({ content }) => {
  const [isCopied, setIsCopied] = useState(false);
  const textRef = useRef(null);

  const copylink = () => {
    if (navigator.clipboard) {
      // For desktop browsers
      navigator.clipboard.writeText(content)
        .then(() => console.log('Text copied successfully'))
        .catch(err => console.error('Unable to copy text', err));
    } else {
      // for mobile devices
      const textArea = document.createElement('textarea');
      textArea.value = content;
      document.body.appendChild(textArea);
      textArea.select();
  
      try {
        document.execCommand('copy');
        // console.log('Text copied successfully');
      } catch (err) {
        // console.error('Unable to copy text', err);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };
  const handleCopyClick = () => {
    copylink();
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="flex items-center bg-gray-100 dark:bg-black p-2 rounded-md my-2 relative">
      <div className="flex-shrink-0 w-6 h-6 mr-2 text-white flex items-center justify-center">
        <p className="text-xs p-2 bg-blue-500 dark:bg-blue-900 rounded-full">GET</p>
      </div>
      <div className="flex-grow relative">
        <div className="bg-white dark:bg-dark py-2 pl-2 pr-4 rounded md:p-2">
          {content}
          <button
            onClick={handleCopyClick}
            className="absolute right-2 top-2 bg-blue-500 dark:bg-blue-900 text-white px-1 md:px-2 py-0 rounded hover:bg-blue-600 opacity"
          >
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
      </div>
      {isCopied && (
        <div className="absolute right-2 bottom-2 bg-green-500 text-white px-2 py-1 rounded">
          Copied!
        </div>
      )}
      <textarea
        readOnly
        ref={textRef}
        value={content}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default PlainText;
