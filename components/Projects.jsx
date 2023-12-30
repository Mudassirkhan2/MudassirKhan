"use client"
import HomeFinderGif from '../public/assets/HomeFinder.gif';
import bugbounty from '../public/assets/bugbounty.png';
import tabstacker from '../public/assets/tabstacker.png';
import AnimateLetters from './clients/AnimateLetters';
import ProjectSection from './clients/ProjectSection';
import { ElementWrapper } from './clients/client';

const Projects = () => {

  return (
    <ElementWrapper nameOfTheElement='projects'>
      <section className='max-w-6xl p-2 mx-auto mt-10 overflow-hidden rounded-lg shadow-2xl md:p-4'>
        <AnimateLetters letter='My Featured Projects' />
        <div className='flex flex-col gap-24'>
          <ProjectSection
            imageSrc={tabstacker}
            title='TabStacker 📑'
            indexValue={0}
            description='A tab management extension. Built using '
            techStack={['React.js', 'Tailwind CSS', 'Chrome Extension API']}
            features='Offers a comprehensive solution for organizing and optimizing browsing sessions leading to a more streamlined workflow and improved productivity. Login using Google Gmail account. Responsive design. Collaborated with a cross-functional team consisting of a Product Manager, a Designer, and a Developer.'
            projectPortfolio='https://www.joincolab.io/product/tabstacker'
            liveLink='https://tabstacker.vercel.app/'
            githubLink='https://github.com/Mudassirkhan2/tabstacker-frontend'
          />
          <ProjectSection
            imageSrc={HomeFinderGif}
            title='Home Finder 🏠'
            indexValue={1}
            description='A website that allows property owners to effor tlessly list their houses for rent or sale. The platform offers comprehensive property details, high-resolution image uploads, and a responsive design. Built using '
            techStack={['React.js', 'Tailwind CSS', 'Firebase', 'Framer Motion']}
            features=' it offers features such as comprehensive property details, high-resolution image uploads, responsive design.'

            liveLink='https://home-finder-khan.vercel.app/'
            githubLink='https://github.com/Mudassirkhan2/HomeFinder'
          />
          <ProjectSection
            imageSrc={bugbounty}
            title='Bug Bounty Brigade 🛡️'
            indexValue={1}
            description='Developed a website for the cybersecurity community, aimed at providing a valuable online resource for enthusiasts, professionals, and anyone interested in the field. This project involved the use of modern web technologies, including  '
            techStack={['Next.js', 'Tailwind CSS', 'TypeScript', 'Radix-ui']}
            features=' it offers features where  Users can find information about upcoming cybersecurity events, workshops, and webinars. '
            liveLink='https://www.bugbountybrigade.tech/'
            githubLink='https://github.com/Mudassirkhan2/bug-bounty-brigade-website'
          />
        </div>
      </section>
    </ElementWrapper>
  );
};

export default Projects;

