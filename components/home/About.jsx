"use client";
import Image from 'next/image'
import React from 'react'
import FramerIcon from '../../public/assets/framer.png';
import AnimateLetters from '../common/AnimateLetters';
import { ElementWrapper } from '../clients/client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <ElementWrapper nameOfTheElement="about">
      <section className="max-w-6xl p-2 mx-auto rounded-lg shadow-2xl outline-dashed outline-1 outline-secondary">
        <AnimateLetters letter='Something About Me' />
        <motion.div
          ref={ref}
          initial={{ filter: 'blur(5px)' }}
          animate={{ filter: inView ? 'blur(0px)' : 'blur(5px)' }}
          transition={{ duration: 0.5 }}
          className='flex flex-col mt-10 select-none gap-x-10 gap-y-10 md:flex-row xl:gap-x-16 outline-dashed outline-1 outline-secondary'
        >
          <div className='flex flex-col p-2 mb-4 md:w-1/2 outline-dashed outline-1 outline-secondary'>
            <h2 className='mb-6 text-3xl md:text-4xl'>Hi 👋 I&apos;m  <span className='text-primary '>Mudassir</span>  ,</h2>
            <div className='space-y-3'>
              <p className='font-mono text-base md:text-xl'>As a front-end developer working professionally with Angular, I combine my engineering background in BTech Electrical and Electronics with hands-on experience building scalable web applications. Currently developing enterprise-level solutions at Shipthis, I specialize in creating intuitive interfaces and robust architectures that deliver seamless user experiences.
              </p>
              <p className='font-mono text-base md:text-xl'>  My expertise spans modern front-end technologies including Angular, TypeScript, Next.js and React, with a strong focus on reactive programming and component-based architecture. Beyond client work, I actively contribute to open-source projects and collaborate with cross-functional teams to solve complex problems through innovative technical solutions. I continuously expand my skills in  performance optimization, and modern web development practices.
              </p>
            </div>
          </div>
          <div className='p-2 mb-4 select-none md:w-1/2 outline-dashed outline-1 outline-secondary'>
            <h2 className='mb-6 text-4xl text-center text-primary' >Tools and Languages <span className='text-center text-white'>I Command </span> </h2>
            <ul className='flex flex-wrap justify-center gap-12 mb-2 md:gap-7'>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
                  alt="angular"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">Angular</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg"
                  alt="Material"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 "> Angular Material</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Nextjs"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">Next js</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="react js"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">React JS</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="react js"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">TypeScript</div>
              </li>

              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="tailwind css"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">Tailwind CSS</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                  alt="sass"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">SASS</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                  alt="tailwind css"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">mongodb</div>
              </li>

              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">JavaScript</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="JavaScript"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">CSS</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="JavaScript"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">HTML</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">Python</div>
              </li>


              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src={FramerIcon}
                  alt="Framer motion"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">Framer motion</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  alt="Figma"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">Figma</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">Git</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="Github"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">Github</div>
              </li>

            </ul>
          </div>
        </motion.div>
      </section>
    </ElementWrapper>
  )
}

export default About