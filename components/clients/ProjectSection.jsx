"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import React from 'react';

const ProjectSection = ({ imageSrc, title, indexValue, liveLink, githubLink }) => {
    const projectsData = [
        {
          description: 'Google Clone is a clone of the Google search engine. Built using',
          techStack: [' Next.js', 'Tailwind CSS', 'Google Custom Search API'],
          features: [
            'search functionality',
            'login using Google Gmail account',
            'visually appealing search results and image pages',
            'pagination',
            'responsive design',
          ],
        },
        {
          description: 'A website that allows property owners to effortlessly list their houses for rent or sale. The platform offers comprehensive property details, high-resolution image uploads, and a responsive design. Built using',
          techStack: [' React.js', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
          features: [
            'comprehensive property details',
            'high-resolution image uploads',
            'responsive design',
          ],
        },
        {
          description: 'A website where lifts and floors can be generated from user input. Lifts move between floors based on button clicks, just like in real life. Requests made while lifts are busy are preserved and served when any of the lifts are free. Built using',
          techStack: [' HTML', 'CSS', 'Vanilla JavaScript'],
          features: [
            'lifts and floors generation',
            'responsive lift movement',
            'preserving requests while lifts are busy',
          ],
        },
      ];
      

    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });
    const animationVariants1 = {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -100 },
    };
    const animationVariants2 = {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 100 },
    };
  
    return (
      <div className='flex flex-col'>
        <div className='flex flex-col' ref={ref}>
          <motion.div
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants1}
            transition={{ duration: 0.8 }}
          >
            <Image src={imageSrc} width={800} height={800} alt='project' className='shadow-2xl outline-dashed outline-1 outline-primary' />
          </motion.div>
          <motion.div className='self-end mt-3 md:w-3/4' animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants2}
            transition={{ duration: 0.8, delay: 1 }}>
            <h3 className='mt-2 mb-3 text-5xl font-bold text-teal-500 font-Caveat'>{title}</h3>
                {
                        <p key={indexValue} className='self-end mb-3 font-mono text-lg'>
                            {projectsData[indexValue].description}
                            {projectsData[indexValue].techStack.map((tech, i) => (
                            <span key={indexValue} className={`text-2xl font-bold tracking-widest ${indexValue === 0 ? 'text-pink-500' : indexValue === 1 ? 'text-yellow-500' : 'text-[#B799FF]'} font-Caveat`}>
                                {tech}
                                {i !== projectsData[1].techStack.length - 1 && ', '}
                            </span>
                            ))}
                            , it offers features such as{' '}
                            {projectsData[indexValue].features.map((feature, i) => (
                            <React.Fragment key={i}>
                                {feature}
                                {i !== projectsData[indexValue].features.length - 1 ? ', ' : '.'}
                            </React.Fragment>
                            ))}
                        </p> 
                        }
            <a href={liveLink} target='_blank' rel="noreferrer" className='font-serif text-lg text-blue-500 transition duration-150 ease-in cursor-pointer hover:text-blue-800 md:text-2xl'>Live</a>
            <a href={githubLink} target='_blank' rel="noreferrer" className='ml-2 font-serif text-lg text-blue-500 transition duration-150 ease-in cursor-pointer hover:text-blue-800 md:text-2xl'>Github</a>
          </motion.div>
        </div>
      </div>
    );
  };
  
    export default ProjectSection;