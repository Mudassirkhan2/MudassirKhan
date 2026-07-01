"use client"
import Image from 'next/image';
import NextLink from 'next/link';
import ziyafat from '../../public/assets/ziyafat.png';
import homefinder from '../../public/assets/homefinder.png';
import tabstacker from '../../public/assets/tabstacker.png';
import agileflow from '../../public/assets/agileflow.png';
import insightSphere from '../../public/assets/insightSphere.png';
import agileboard from '../../public/assets/agileboard.png';
import googleclone from '../../public/assets/googleclone.png';
import spaceTourism from '../../public/assets/spaceTourism.png';
import ipaddresstracker from '../../public/assets/ipaddresstracker.png';
import liftsimulation from '../../public/assets/liftsimulation.png';
import weatherapp from '../../public/assets/weatherapp.png';

const projects = [
    {
        imageSrc: ziyafat,
        title: 'Ziyafat',
        description: 'An ERP for catering businesses — managing the full lifecycle from lead capture to invoice, with bookings, dish catalogs and a public storefront.',
        techStack: ['Next.js 15', 'TypeScript', 'FastAPI', 'MongoDB'],
        liveLink: 'https://getziyafat.vercel.app',
        githubLink: 'https://github.com/Mudassirkhan2/Ziyafat',
    },
    {
        imageSrc: homefinder,
        title: 'Home Finder',
        description: 'A platform for owners to list homes for rent or sale, with rich property details, high-res image uploads and a responsive design.',
        techStack: ['React', 'Tailwind CSS', 'MongoDB', 'Framer Motion'],
        liveLink: 'https://homefinder-khan.vercel.app/',
        githubLink: 'https://github.com/Mudassirkhan2/HomeFinder',
    },
    {
        imageSrc: tabstacker,
        title: 'TabStacker',
        description: 'A Chrome extension for organizing and optimizing browsing sessions to boost productivity. Built with a cross-functional team.',
        techStack: ['React', 'Tailwind CSS', 'Chrome API'],
        liveLink: 'https://tabstacker.vercel.app/',
        githubLink: 'https://github.com/Mudassirkhan2/tabstacker-frontend',
    },
    {
        imageSrc: agileflow,
        title: 'AgileFlow',
        description: 'A project management app inspired by Asana, with smooth animations using Framer Motion enhancing the overall user experience.',
        techStack: ['Next.js', 'Framer Motion', 'Shadcn', 'NodeMailer'],
        liveLink: 'https://agileflow-agile.vercel.app/',
    },
    {
        imageSrc: insightSphere,
        title: 'InsightSphere',
        description: 'A comprehensive admin dashboard for efficiently managing and visualizing data with an intuitive experience for administrators.',
        techStack: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Recharts'],
        liveLink: 'https://insight-sphere-dashboard.vercel.app/',
    },
    {
        imageSrc: agileboard,
        title: 'AgileBoard',
        description: 'A dynamic Kanban board using NextAuth for authentication, enabling users to manage tasks from To-Do to Done with custom columns.',
        techStack: ['Next.js', 'next-auth', 'TypeScript', 'dnd-kit'],
        liveLink: 'https://agile-board-khan.vercel.app/',
    },
    {
        imageSrc: googleclone,
        title: 'Google Clone',
        description: 'A fully functional Google clone with integrated secure authentication via NextAuth, showcasing frontend and auth implementation skills.',
        techStack: ['Next.js', 'next-auth', 'Tailwind CSS'],
        liveLink: 'https://google-clone-khan.vercel.app/',
    },
    {
        imageSrc: spaceTourism,
        title: 'Space Tourism',
        description: 'A responsive multi-page Space Tourism website with seamless navigation, tabbed content and interactive hover states.',
        techStack: ['React.js', 'Tailwind CSS', 'Figma'],
        liveLink: 'https://mudassirkhan2.github.io/spaceTourism/',
    },
    {
        imageSrc: weatherapp,
        title: 'Weather App',
        description: 'A dynamic weather app using OpenWeatherMap API for real-time updates with unit toggling and a responsive layout.',
        techStack: ['React.js', 'Tailwind CSS', 'OpenWeatherMap API'],
        liveLink: 'https://mudassirkhan2.github.io/weatherApp/',
    },
    {
        imageSrc: ipaddresstracker,
        title: 'IP Address Tracker',
        description: 'A web app to track the geographical location of IP addresses, rendered on an interactive Leaflet.js map.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Leaflet.js'],
        liveLink: 'https://mudassirkhan2.github.io/IP-Address-Tracker/',
    },
    {
        imageSrc: liftsimulation,
        title: 'Lift Simulation',
        description: 'A lifelike elevator simulation with dynamic lift and floor generation, realistic movement, and concurrent request handling.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://mudassirkhan2.github.io/Lift-Simulation/',
    },
];

const ProjectCard = ({ imageSrc, title, description, techStack, liveLink, githubLink }) => (
    <div
        className="flex flex-col overflow-hidden"
        style={{
            borderRadius: '18px',
            border: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.024)',
        }}
    >
        {/* Image */}
        <div className="shrink-0 overflow-hidden" style={{ height: '160px', background: '#0e1018' }}>
            <Image
                src={imageSrc}
                alt={title}
                width={600}
                height={160}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1" style={{ padding: '22px' }}>
            <h3 className="font-semibold mb-2" style={{ fontSize: '20px', color: '#e8eaf0' }}>{title}</h3>
            <p className="flex-1 mb-4" style={{ fontSize: '14px', color: '#9aa0b4', lineHeight: '1.55' }}>{description}</p>

            <div className="flex flex-wrap gap-1.5 mb-5">
                {techStack.map((tech) => (
                    <span
                        key={tech}
                        style={{
                            fontSize: '11px',
                            padding: '4px 9px',
                            borderRadius: '999px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#c3c8d6',
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-2 mt-auto">
                {liveLink && (
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:opacity-80 transition-opacity"
                        style={{ background: 'rgb(62,232,164)', borderRadius: '9px', padding: '9px 16px', fontSize: '13px', color: '#06120c' }}
                    >
                        View website
                    </a>
                )}
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:opacity-80 transition-opacity"
                        style={{ borderRadius: '9px', padding: '9px 16px', fontSize: '13px', color: '#e8eaf0', border: '1px solid rgba(255,255,255,0.16)', background: 'transparent' }}
                    >
                        GitHub
                    </a>
                )}
            </div>
        </div>
    </div>
);

const ProjectsGrid = () => (
    <section className="max-w-[1160px] mx-auto px-7 pt-28 pb-20">
        <div style={{ overflow: 'hidden', marginBottom: '40px' }}>
            <NextLink
                href="/"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors duration-200 reveal-item"
                style={{ fontSize: '13px', color: '#6b7185', animationDelay: '0.05s' }}
            >
                ← back home
            </NextLink>
        </div>

        <div style={{ overflow: 'hidden' }}>
            <p className="font-mono uppercase mb-3 reveal-item" style={{ fontSize: '13px', letterSpacing: '2px', color: 'rgb(62,232,164)', animationDelay: '0.15s' }}>
                // projects
            </p>
        </div>
        <div style={{ overflow: 'hidden' }}>
            <h1 className="font-bold mb-4 reveal-item text-5xl sm:text-6xl lg:text-[72px]" style={{ color: '#e8eaf0', animationDelay: '0.25s' }}>All projects</h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '56px' }}>
            <p className="max-w-[560px] reveal-item" style={{ fontSize: '18px', color: '#9aa0b4', animationDelay: '0.38s' }}>
                A selection of products and experiments I&apos;ve built — from full ERP systems to browser extensions.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2" style={{ color: 'rgb(107,113,133)', fontSize: '12px' }}>
            <span>© {new Date().getFullYear()} Mudassir Khan</span>
            <a href="mailto:mudassir222001@gmail.com" className="hover:text-primary transition-colors duration-200">Get in touch →</a>
        </div>
    </section>
);

export default ProjectsGrid;
