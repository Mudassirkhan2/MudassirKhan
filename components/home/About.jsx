"use client";
import Image from 'next/image'
import React from 'react'
import FramerIcon from '../../public/assets/framer.png';
import AnimateLetters from '../common/AnimateLetters';
import { ElementWrapper } from '../clients/client';
const About = () => {
  return (
    <ElementWrapper nameOfTheElement="about">
      <section className="max-w-6xl p-2 mx-auto rounded-lg shadow-2xl outline-dashed outline-1 outline-secondary">
        <AnimateLetters letter='Something About Me' />
        <div className='flex flex-col mt-10 select-none gap-x-10 gap-y-10 md:flex-row xl:gap-x-16 outline-dashed outline-1 outline-secondary'>
          <div className='flex flex-col p-2 mb-4 md:w-1/2 outline-dashed outline-1 outline-secondary'>
            <h2 className='mb-6 text-3xl md:text-4xl'>Hi 👋 I&apos;m  <span className='text-primary '>Mudassir</span>  ,</h2>
            <div className='space-y-3'>
              <p className='font-mono text-base md:text-xl'>Having successfully completed my studies in BTech Electrical and Electronics Engineering, I possess a distinctive combination of engineering expertise and proficient coding skills. I&apos;m  passionate about creating captivating user experiences through intuitive and responsive front-end development.
              </p>
              <p className='font-mono text-base md:text-xl'>I actively contribute to the open-source community and enjoy collaborating with like-minded individuals to bring innovative ideas to life.  My tech stack includes Next.js, React, TailwindCSS, and Im always eager to learn and expand my skills.
              </p>
            </div>
          </div>
          <div className='p-2 mb-4 select-none md:w-1/2 outline-dashed outline-1 outline-secondary'>
            <h2 className='mb-6 text-4xl text-center text-primary' >Tools and Languages <span className='text-center text-white'>I Command </span> </h2>
            <ul className='flex flex-wrap justify-center gap-12 mb-2 md:gap-7'>
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
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  alt="redux-toolkit"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">redux-toolkit</div>
              </li>
              <li className='group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl text-sm lg:text-base'>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  alt="tailwind css"
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">Tailwind CSS</div>
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
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  alt="firebase "
                  width={70}
                  height={70}
                  className='w-10 h-10 lg:w-16 lg:h-16'
                />
                <div className="absolute px-2 py-1 overflow-hidden font-bold transition-all duration-300 rounded-lg top-[85%] whitespace-nowrap bg-primary group-hover:scale-100 group-hover:opacity-100 ">firebase</div>
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
        </div>
      </section>
    </ElementWrapper>
  )
}

export default About
