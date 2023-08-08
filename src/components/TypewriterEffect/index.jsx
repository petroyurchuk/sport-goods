import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ textToWrite }) => {
  const text = textToWrite;
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div>
      <p className="text-white font-signature text-4xl">{displayText}</p>
    </div>
  );
};

export default TypewriterEffect;
