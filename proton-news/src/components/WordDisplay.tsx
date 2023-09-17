"use client"
import { useState, useEffect } from 'react';
import { Bebas_Neue} from "@next/font/google";

const Bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

interface WordDisplayProps {
  words: string[];
}

const WordDisplay: React.FC<WordDisplayProps> = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentWordIndex(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentWordIndex, words]);

  return <div className={`text-red-800 text-4xl ${Bebas.className}`}>{words[currentWordIndex]}</div>;
};

export default WordDisplay;