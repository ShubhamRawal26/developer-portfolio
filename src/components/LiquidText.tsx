import React from 'react';
import { motion } from 'motion/react';

interface LiquidTextProps {
  text: string;
  className?: string;
}

export default function LiquidText({ text, className = "" }: LiquidTextProps) {
  // Split the text into characters, keeping spaces intact
  const characters = Array.from(text);

  return (
    <span className={`inline-block select-none ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block origin-center transition-colors duration-200 cursor-default text-inherit hover:text-amber-500 dark:hover:text-[#ffd369]"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
          whileHover={{
            y: -12,
            scaleY: 1.2,
            scaleX: 0.85,
            skewX: -12,
            filter: 'drop-shadow(0 6px 10px rgba(245,158,11,0.4))',
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 12
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}
