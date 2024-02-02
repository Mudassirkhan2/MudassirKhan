"use client"
import Link from 'next/link';
import HomeFinderGif from '../../public/assets/homefinder.png';
import bugbounty from '../../public/assets/bugbounty.png';
import tabstacker from '../../public/assets/tabstacker.png';
import AnimateLetters from '../common/AnimateLetters';
import { ElementWrapper } from '../clients/client';
import ProjectCard from '../clients/ProjectCard';

const Projects = () => {

  return (
    <ElementWrapper nameOfTheElement='projects'>
      <section className='max-w-6xl p-2 mx-auto mt-10 overflow-hidden rounded-lg shadow-2xl md:p-4 '>
        <AnimateLetters letter='My Featured Projects' />
        <div className='flex flex-col gap-12 xl:gap-16'>
          <ProjectCard
            imageSrc={tabstacker}
            title='TabStacker 📑'
            indexValue={0}
            description='A tab management extension. Built using '
            techStack={['React.js', 'Tailwind CSS', 'Chrome Extension API']}
            features=' Offers a comprehensive solution for organizing and optimizing browsing sessions leading to a more streamlined workflow and improved productivity. Login using Google Gmail account. Responsive design. '
            collobratedWith={true}
            projectPortfolio='https://www.joincolab.io/product/tabstacker'
            liveLink='https://tabstacker.vercel.app/'
            githubLink='https://github.com/Mudassirkhan2/tabstacker-frontend'
          />
          <ProjectCard
            imageSrc={HomeFinderGif}
            title='Home Finder 🏠'
            indexValue={1}
            description='A website that allows property owners to effortlessly list their houses for rent or sale. The platform offers comprehensive property details, high-resolution image uploads, and a responsive design. Built using '
            techStack={['React.js', 'Tailwind CSS', 'Firebase', 'Framer Motion']}
            features=' it offers features such as comprehensive property details, high-resolution image uploads, responsive design.'
            liveLink='https://home-finder-khan.vercel.app/'
            githubLink='https://github.com/Mudassirkhan2/HomeFinder'
          />
          <ProjectCard
            imageSrc={bugbounty}
            title='Bug Bounty Brigade 🛡️'
            indexValue={1}
            description='Developed a website for the cybersecurity community, aimed at providing a valuable online resource for enthusiasts, professionals, and anyone interested in the field. This project involved the use of modern web technologies, including  '
            techStack={['Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn']}
            features=' it offers features where  Users can find information about upcoming cybersecurity events, workshops, and webinars. '
            liveLink='https://www.bugbountybrigade.tech/'
            githubLink='https://github.com/Mudassirkhan2/bug-bounty-brigade-website'
          />
          <Link href='/projects' className="inline-flex mx-auto h-12 w-fit animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-[#B799FF] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
            View More Projects
          </Link>
        </div>

      </section>
    </ElementWrapper>
  );
};

export default Projects;

