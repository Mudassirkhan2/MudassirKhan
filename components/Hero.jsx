"use client"
import GithubIcon from '../app/assets/githubIcon.png';
import gmailIcon from '../app/assets/gmail.png';
import linkedinIcon from '../app/assets/linkedin.png';
import twitterIcon from '../app/assets/twitter.png';
import {motion} from 'framer-motion'
import Image from 'next/image';
import { useState } from 'react';
import Intro from './clients/Intro';

const Hero = () => {
    const [textSize, setTextSize] = useState("7rem");
    const [transitiontime, setTransitiontime] = useState(3);
    const [yValue, setYValue] = useState("30vh");
    // to change the text size after animation complete
    // to change the transition time after animation complete
    const handleAnimationComplete = () => {
        setTextSize("5rem");
        setTransitiontime(0.3);
        setYValue("0vh");
    };
  return (
    <div className="flex flex-col relative items-center justify-center w-full h-[100vh] overflow-hidden select-none">
        <div className='max-w-6xl p-2 rounded-lg shadow-2xl'>
            <div className='absolute top-0 cursor-pointer left-[66%] animate-pulse'>
                <a href="">
                    <Image
                            src={GithubIcon}
                            alt="Picture of the author"
                            width={70}
                            height={70}
                            className="rounded-full"
                            ></Image>
                </a>
            </div>
            <div className='absolute top-0 cursor-pointer left-1/3 '>
            <a href=""> 
                    <Image
                            src={gmailIcon}
                            alt="Picture of the author"
                            width={70}
                            height={70}
                            className="rounded-full"
                            ></Image>
                </a>
            </div>
            <div className='absolute left-0 cursor-pointer top-3/4 ' >
                <a href="https://www.linkedin.com/in/mudassir-khan-522303233/">
                        <Image
                            src={linkedinIcon}
                            alt="Picture of the author"
                            width={70}
                            height={70}
                            className="rounded-full"
                        ></Image>
                    </a>
            </div>
            <div className='absolute right-0 cursor-pointer top-1/4 '>
                <a href="">
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
                <motion.h1 className="z-30 text-teal-300 text-start whitespace-nowrap " 
                    initial={{ x:"100vw",
                        y:"30vh",
                        fontSize:"7rem",
                    }}
                    animate={{ x:0,
                        y:yValue,
                        fontSize:textSize,
                    }}
                    transition={{duration:transitiontime}}
                    onAnimationComplete={handleAnimationComplete}
                > <span className='outline-text' style={{ whiteSpace: "nowrap" }}>Hello! i&apos;m </span>  Mudassir Khan </motion.h1>
                <p className="mt-3 mb-8 text-4xl text-center"> a
                    <span className="text-red-500 ">  Frontend Developer  </span>From Hyderabad
                </p>
        </div>
        <Intro />
    </div>
</div>
   
  )
}

export default Hero
