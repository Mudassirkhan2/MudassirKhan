"use client"
import Link from 'next/link';
import HomeFinderGif from '../../public/assets/homefinder.png';
import tabstacker from '../../public/assets/tabstacker.png';
import ziyafat from '../../public/assets/ziyafat.png';
import { ElementWrapper } from '../clients/client';
import ProjectCard from '../clients/ProjectCard';

const Projects = () => {
    return (
        <ElementWrapper nameOfTheElement='projects'>
            <section className='relative max-w-6xl px-4 mx-auto py-20'>
                <p className="text-primary font-mono text-sm tracking-widest mb-3">// selected work</p>
                <h2 className='text-4xl lg:text-5xl font-bold text-white mb-16'>Featured projects</h2>

                <div className='flex flex-col gap-20 lg:gap-28'>
                    <ProjectCard
                        imageSrc={ziyafat}
                        title='Ziyafat'
                        indexValue={0}
                        description='An ERP built for catering businesses — managing the full lifecycle from lead capture to invoice, including bookings, dish catalogs, menu building, quotations, and a public-facing storefront.'
                        techStack={['Next.js 15', 'TypeScript', 'FastAPI', 'MongoDB', 'shadcn/ui', 'Tailwind CSS']}
                        liveLink='https://getziyafat.vercel.app'
                        githubLink='https://github.com/Mudassirkhan2/Ziyafat'
                    />
                    <ProjectCard
                        imageSrc={HomeFinderGif}
                        title='Home Finder'
                        indexValue={1}
                        description='A platform that lets property owners list their homes for rent or sale, with comprehensive property details, high-resolution image uploads, and a fully responsive design.'
                        techStack={['React.js', 'Tailwind CSS', 'MongoDB', 'Framer Motion']}
                        liveLink='https://homefinder-khan.vercel.app/'
                        githubLink='https://github.com/Mudassirkhan2/HomeFinder'
                    />
                    <ProjectCard
                        imageSrc={tabstacker}
                        title='TabStacker'
                        indexValue={2}
                        description='A Chrome extension for organizing and optimizing browsing sessions — leading to a more streamlined workflow and improved productivity. Built with a cross-functional team of a PM, a designer and a developer.'
                        techStack={['React.js', 'Tailwind CSS', 'Chrome Extension API']}
                        collobratedWith={true}
                        projectPortfolio='https://www.joincolab.io/product/tabstacker'
                        liveLink='https://tabstacker.vercel.app/'
                        githubLink='https://github.com/Mudassirkhan2/tabstacker-frontend'
                    />
                </div>

                <div className="mt-16 pt-10 border-t border-white/5 text-center">
                    <Link
                        href='/projects'
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors duration-200"
                    >
                        View all projects→
                    </Link>
                </div>
            </section>
        </ElementWrapper>
    );
};

export default Projects;
