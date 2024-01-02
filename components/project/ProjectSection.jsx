
import React from 'react'
import agileflow from '../../public/assets/agileflow.png';
import insightSphere from '../../public/assets/insightSphere.png';
import agileboard from '../../public/assets/agileboard.png';
import liftsimulation from '../../public/assets/liftsimulation.png';
import weatherapp from '../../public/assets/weatherapp.png';
import ipaddresstracker from '../../public/assets/ipaddresstracker.png';
import googleclone from '../../public/assets/googleclone.png';
import spaceTourism from '../../public/assets/spaceTourism.png';
import Link from 'next/link';
import { ProjectTile } from './ProjectTile';
const ProjectSection = () => {
    const projects = [
        {
            imageSrc: agileflow,
            title: 'AgileFlow',
            description: 'I have successfully developed a web application inspired by Asana, used Framer Motion to focus on incorporating smooth and interactive animations, enhancing the overall user experience.',
            technologies: ['NextJS', 'Framer Motion', 'Shadcn', 'Tailwind CSS', 'NodeMailer'],
            websiteLink: 'https://agileflow-agile.vercel.app/',
            backgroundColor: '#070c22',
        },
        {
            imageSrc: insightSphere,
            title: 'InsightSphere',
            description: 'Developed a comprehensive and user-friendly admin dashboard. It serves as a powerful tool for efficiently managing and visualizing data, ensuring a seamless and intuitive experience for administrators.',
            technologies: ['NextJS', 'MongoDB', 'Tailwind CSS', 'Recharts'],
            websiteLink: 'https://insight-sphere-dashboard.vercel.app/',
            backgroundColor: '#5d57c9',
        },
        {
            imageSrc: agileboard,
            title: 'AgileBoard',
            description: 'Adeptly utilizing NextAuth for seamless authentication, demonstrated through the creation of a dynamic Kanban board enabling users to manage tasks effectively from \'To-Do\' to \'Done\' with customizable columns.',
            technologies: ['NextJS', 'next-auth', 'TypeScript', 'dnd-kit'],
            websiteLink: 'https://agile-board-khan.vercel.app/',
            backgroundColor: '#255058',
        },
        {
            imageSrc: googleclone,
            title: "Google Clone",
            description: "Created a fully functional Google clone using Next.js and integrated secure authentication with NextAuth, showcasing frontend expertise and authentication implementation skills.",
            technologies: ["NextJS", "next-auth", "Tailwind CSS"],
            websiteLink: "https://google-clone-khan.vercel.app/",
            backgroundColor: "#6D214F"
        },
        {
            imageSrc: spaceTourism,
            title: "SpaceTourism",
            description: "Developed a responsive multi-page Space Tourism website using React.js, Tailwind CSS, and Figma designs, offering seamless navigation, tabbed content, and interactive hover states for an engaging user experience.",
            technologies: ["ReactJS", "Tailwind CSS", "figma"],
            websiteLink: "https://mudassirkhan2.github.io/spaceTourism/",
            backgroundColor: "#070c22"
        },
        {
            imageSrc: ipaddresstracker,
            title: "IP Address Tracker",
            description: "IP-Address-Tracker is a web app that provides a convenient and efficient way to track the geographical location of IP addresses.",
            technologies: ["HTML", "CSS", "JavaScript", "leafletjs"],
            websiteLink: "https://mudassirkhan.me/IP-Address-Tracker/",
            backgroundColor: "#3B3B98"
        },
        {
            imageSrc: liftsimulation,
            title: "LiftSimulation",
            description: "Engineered a lifelike simulated elevator system using HTML, CSS, and JS, featuring dynamic generation of lifts and floors, realistic movement, and efficient handling of concurrent requests for an immersive user experience.",
            technologies: ["HTML", "CSS", "JavaScript"],
            websiteLink: "https://mudassirkhan.me/Lift-Simulation/",
            backgroundColor: "#243862"
        },
        {
            imageSrc: weatherapp,
            title: "WeatherApp",
            description: "Developed a dynamic React.js weather app with Tailwind CSS, leveraging OpenWeatherMap API for real-time updates, allowing users to effortlessly check current weather details, toggle units, and enjoy responsive design across various devices.",
            technologies: ["ReactJS", "Tailwind CSS", "OpenWeatherMap API", "react-animated-weather"],
            websiteLink: "https://mudassirkhan.me/weatherApp/",
            backgroundColor: "#00090D"
        }
    ];

    return (
        <>
            <div>
                {projects.map((project, index) => (
                    <ProjectTile key={index} {...project} />
                ))}

            </div>
            <div>
                <li className='px-2 py-1 mx-auto mt-4 text-center list-none transition duration-500 ease-in-out rounded-lg cursor-pointer hover:text-primary outline-primary outline-dashed outline-1 text-cyan-500 hover:shadow-2xl hover:outline-[#B799FF]  hover:shadow-cyan-600 w-fit'>
                    <Link
                        href='/'
                    >
                        <span className='transition duration-500 ease-in-out hover:text-red-500'>Go </span><span className='transition duration-500 ease-in-out hover:text-red-500'>Back</span>
                    </Link>
                </li>
            </div>
        </>
    )
}

export default ProjectSection
