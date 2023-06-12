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
  const [zIndex, setZIndex] = useState(30);

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
    // remove z index after 2 seconds
    setTimeout(() => {
      setZIndex(0);
    }
    , 2000);
};
   
    return (
        <>
                <motion.h1
                  className="text-teal-300 mt-14 text-start whitespace-nowrap font-nabla md:hidden"
                  initial={{
                    x: "100vw",
                    y: "20vh",
                    fontSize: "2rem",
                    fontFamily: "nabla",
                    zIndex: 30,
                  }}
                  animate={{
                    x: 0,
                    y: yValue,
                    fontSize: "2rem",
                    fontFamily: fontFamily,
                    zIndex: zIndex,
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
                  className="hidden text-teal-300 mt-14 text-start whitespace-nowrap font-nabla md:block lg:hidden"
                  initial={{
                    x: "100vw",
                    y: "20vh",
                    fontSize: "3rem",
                    fontFamily: "nabla",
                    zIndex: 30,
                  }}
                  animate={{
                    x: 0,
                    y: yValue,
                    fontSize: "3rem",
                    fontFamily: fontFamily,
                    zIndex: zIndex,
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
               className="hidden text-teal-300 text-start whitespace-nowrap font-nabla lg:block"
               initial={{
                 x: "100vw",
                 y: "20vh",
                 fontSize: "7rem",
                 fontFamily: "nabla",
                 zIndex: 30,
               }}
               animate={{
                 x: 0,
                 y: yValue,
                 fontSize: textSize,
                 fontFamily: fontFamily,
                  zIndex: zIndex,
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
