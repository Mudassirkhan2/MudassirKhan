"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const HeroAnimation = () => {
    useEffect(() => {
    if (typeof window !== 'undefined') {
      // Scroll to top on page reload
      window.scrollTo(0, 0);
    }
  }, []);

  const [animationComplete, setAnimationComplete] = useState(false);
  const [textSize, setTextSize] = useState("7rem");
  const [transitiontime, setTransitiontime] = useState(3);
  const [yValue, setYValue] = useState("20vh");
  const [fontFamily, setFontFamily] = useState("nabla");

  useEffect(() => {
    if (animationComplete) {
      document.body.style.overflow = 'auto'; // Enable scrolling
    } else {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    }
  }, [animationComplete]);

const handleAnimationComplete = () => {
    setTransitiontime(0.3);
    setYValue("0vh");
    setFontFamily("jost");
    setAnimationComplete(true);
    setTextSize("5rem");
   
};
   
    return (
        <>
               <motion.h1
               className="z-30 hidden text-teal-300 text-start whitespace-nowrap font-nabla md:block"
               initial={{
                 x: "100vw",
                 y: "20vh",
                 fontSize: "7rem",
                 fontFamily: "nabla",
               }}
               animate={{
                 x: 0,
                 y: yValue,
                 fontSize: textSize,
                 fontFamily: fontFamily,
               }}
               transition={{ duration: transitiontime }}
               onAnimationComplete={handleAnimationComplete}
             >
               <span className="outline-text" style={{ whiteSpace: "nowrap" }}>
                 Hello! I&apos;m
               </span>{" "}
                Mudassir Khan
             </motion.h1>
        <motion.h1
        className="z-30 text-teal-300 mt-14 text-start whitespace-nowrap font-nabla md:hidden"
        initial={{
          x: "100vw",
          y: "20vh",
          fontSize: "2rem",
          fontFamily: "nabla",
        }}
        animate={{
          x: 0,
          y: yValue,
          fontSize: "2rem",
          fontFamily: fontFamily,
        }}
        transition={{ duration: transitiontime }}
        onAnimationComplete={handleAnimationComplete}
      >
        <span className="outline-text" style={{ whiteSpace: "nowrap" }}>
          Hello! I&apos;m
        </span>{" "}
        Mudassir Khan
      </motion.h1>
    
    </>
  );
};

export default HeroAnimation;
