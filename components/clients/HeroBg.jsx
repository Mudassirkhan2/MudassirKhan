"use client"
import { motion } from 'framer-motion'
import { useState } from 'react';

const HeroBg = () => {
    const [width, setWidth] = useState("100%");
    const handleAnimationComplete = () => {
        setWidth("0%");
    };
    return (
        <motion.div className='absolute top-0 left-0 z-30 w-full h-full bg-black' 
            initial={{ width: "100%" }}
          animate={{ width: width }}
    transition={{ duration: 1.3,   delay:1 }}
    onAnimationComplete={handleAnimationComplete}
  >

  </motion.div>
  )
}

export default HeroBg
