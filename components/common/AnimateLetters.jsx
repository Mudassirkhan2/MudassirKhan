"use client"
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import LineAnimation from './LineAnimation';

const AnimateLetters = ({ letter }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sentenceVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const letters = [...letter];
  return (
    <div>
      <motion.h2
        ref={ref}
        initial='initial'
        animate={inView && isMounted ? 'animate' : 'initial'}
        variants={sentenceVariants}
        transition={{ duration: 1 }}
        className='my-10 font-mono text-3xl font-bold text-center select-none lg:text-5xl xl:text-6xl'

      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
          >
            <LineAnimation>

              {letter}
            </LineAnimation>
          </motion.span>
        ))}
      </motion.h2>
    </div>
  )
}

export default AnimateLetters
