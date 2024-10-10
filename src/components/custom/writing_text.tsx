"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// types

type Props = {
  text: string;
  style?: string;
  duration?: number;
  end_char?: boolean;
};
function WritingText({ text, style, duration, end_char }: Props) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayedText.length < text.length) {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }
    }, duration || 50);

    return () => clearTimeout(timer);
  }, [displayedText]);

  return (
    <motion.p
      className={`text-xl font-medium ${style && `${style}`}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      {end_char && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.2 }}
        >
          |
        </motion.span>
      )}
    </motion.p>
  );
}

export default WritingText;
