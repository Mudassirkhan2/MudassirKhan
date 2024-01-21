import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const ProjectCard = ({ imageSrc, title, description, techStack, features, liveLink, githubLink, projectPortfolio }) => {
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
          <Image src={imageSrc} width={800} height="auto"
            loading="lazy"
            alt='project' className='h-auto mx-auto shadow-2xl md:mx-0 outline-dashed outline-1 outline-primary' />
        </motion.div>
        <motion.div className='self-end mt-3 md:w-3/4' animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants2}
          transition={{ duration: 0.8, delay: 1 }}>
          <h3 className='mt-2 mb-3 text-3xl font-bold text-center text-teal-500 md:text-left md:text-5xl font-Caveat'>{title}</h3>
          <p className='self-end mb-3 text-lg select-none font-SpaceGrotesk'>
            {description}
            {techStack.map((tech, i) => (
              <span key={i} className={`text-2xl font-bold tracking-widest ${i % 3 === 0 ? 'text-pink-500' : i % 3 === 1 ? 'text-yellow-500' : 'text-[#B799FF]'} font-sans`}>
                {tech} {i !== techStack.length - 1 && ', '}
              </span>
            ))}
            ,{features}{projectPortfolio && (
              <a href={projectPortfolio} target='_blank' rel='noopener noreferrer' className='text-lg font-bold'>View our <span className='underline text-primary'>Tabstacker Portfolio</span>.</a>
            )}
          </p>
          {liveLink && (
            <a href={liveLink} target='_blank' rel='noopener noreferrer' className='px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-SpaceGrotesk'>{`View Website`}
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target='_blank' rel='noopener noreferrer' className='px-4 py-2 ml-2 text-lg font-bold text-white bg-gray-800 rounded hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2'>{`GitHub`}</a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;