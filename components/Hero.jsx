"use client"
import GithubIcon from '../app/assets/githubIcon.png';
import gmailIcon from '../app/assets/gmail.png';
import linkedinIcon from '../app/assets/linkedin.png';
import twitterIcon from '../app/assets/twitter.png';
import {motion} from 'framer-motion'
import Image from 'next/image';
import { useState ,useEffect } from 'react';
import Intro from './clients/Intro';

const Hero = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
          // Scroll to top on page reload
          window.scrollTo(0, 0);
        }
      }, []);
    const [animationComplete, setAnimationComplete] = useState(true);
    const [textSize, setTextSize] = useState("7rem");
    const [textSizeMobile, setTextSizeMobile] = useState("2rem");
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
      const isLargeDevice = window.innerWidth > 768; // 768 is the min-width for lg devices
    // to change the text size after animation complete
    // to change the transition time after animation complete
    const handleAnimationComplete = () => {
        setTransitiontime(0.3);
        setYValue("0vh");
        setFontFamily("jost");
        setAnimationComplete(true);
        if(isLargeDevice){
            setTextSize("5rem");
        }
        else {
            setTextSizeMobile("2rem");
        }
    };
   
    
   
  return (
    <div className="flex flex-col relative items-center justify-center w-full h-[100vh] overflow-hidden select-none">
        <div className='max-w-6xl p-2 rounded-lg shadow-2xl'>
            <div className='absolute top-0 cursor-pointer left-[66%]  hidden lg:block'>
                <a href="https://github.com/Mudassirkhan2"
                    target="_blank" rel="noopener noreferrer" className="cursor-pointer "
                >
                    <Image
                            src={GithubIcon}
                            alt="Picture of the author"
                            width={70}
                            height={70}
                            className="rounded-full"
                            >

                            </Image>
                </a>
            </div>
            <div className='absolute top-0 hidden cursor-pointer left-1/3 lg:block'>
            <a 
                href="mailto:mudassir222001@gmail.com " target="_blank" rel="noopener noreferrer" className="cursor-pointer "
            > 
                    <Image
                            src={gmailIcon}
                            alt="Picture of the author"
                            width={70}
                            height={70}
                            className="rounded-full"
                            ></Image>
                </a>
            </div>
            <div className='absolute left-0 hidden cursor-pointer top-3/4 lg:block' >
                <a href="https://www.linkedin.com/in/mudassir-khan-522303233/"
                    target="_blank" rel="noopener noreferrer" className="cursor-pointer "
                >
                        <Image
                            src={linkedinIcon}
                            alt="Picture of the author"
                            width={70}
                            height={70}
                            className="rounded-full"
                        ></Image>
                    </a>
            </div>
            <div className='absolute right-0 hidden cursor-pointer top-1/4 lg:block '>
                <a href="https://twitter.com/Mudassir_222"
                    target="_blank" rel="noopener noreferrer" className="cursor-pointer "
                >
                    <Image
                            src={twitterIcon}
                            alt="Picture of the author"
                            width={70}
                            height={70}
                            className="rounded-full"
                        ></Image>
                </a>
            </div>
            <div className="flex flex-col w-full">
                {   
                    isLargeDevice  ?    ( 
                            <motion.h1 className="z-30 text-teal-300 text-start whitespace-nowrap font-nabla " 
                                initial={{ x:"100vw",
                                    y:"20vh",
                                    fontSize:"7rem",
                                    fontFamily:"nabla",
                                }}
                                animate={{ x:0,
                                    y:yValue,
                                    fontSize:textSize,
                                    fontFamily:fontFamily,
                                }}
                                transition={{duration:transitiontime}}
                                onAnimationComplete={handleAnimationComplete}
                            > 
                                    <span className='outline-text' style={{ whiteSpace: "nowrap" }}>Hello! i&apos;m </span>  Mudassir Khan
                            </motion.h1> 

                ) : (
                    <motion.h1 className="z-30 text-teal-300 text-start whitespace-nowrap font-nabla " 
                                initial={{ x:"100vw",
                                    y:"20vh",
                                    fontSize:"2rem",
                                    fontFamily:"nabla",
                                }}
                                animate={{ x:0,
                                    y:yValue,
                                    fontSize:textSizeMobile,
                                    fontFamily:fontFamily,
                                }}
                                transition={{duration:transitiontime}}
                                onAnimationComplete={handleAnimationComplete}
                            > 
                                    <span className='outline-text' style={{ whiteSpace: "nowrap" }}>Hello! i&apos;m </span>  Mudassir Khan
                            </motion.h1> 

                )
            }
                <p className="mt-3 mb-8 text-2xl text-center md:text-4xl"> a
                    <span className="text-red-500 ">  Frontend Developer  </span>From Hyderabad
                </p>
        </div>
        <Intro />
    </div>
</div>
   
  )
}

export default Hero
