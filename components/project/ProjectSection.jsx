"use client"
import Image from 'next/image'
import React from 'react'
import agileflow from '../../public/assets/agileflow.png';
import insightSphere from '../../public/assets/insightSphere.png';
import agileboard from '../../public/assets/agileboard.png';
import liftsimulation from '../../public/assets/liftsimulation.png';
import weatherapp from '../../public/assets/weatherapp.png';
import ipaddresstracker from '../../public/assets/ipaddresstracker.png';
import googleclone from '../../public/assets/googleclone.png';
import spaceTourism from '../../public/assets/spaceTourism.png';
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Link from 'next/link';
const ProjectSection = () => {
    return (
        <>
            <div className='h-[90vh] bg-[#070c22] flex flex-col lg:flex-row justify-center items-center gap-6 xl:gap-16  py-6  xl:px-16 xl:py-6 md:px-4'>
                <Image src={agileflow} alt='contact' width={800} height={800} loading='lazy'
                    className='w-[95%] h-[80%] lg:w-[50%] rounded-lg'
                />
                <section className=' xl:w-[30%] px-4 '>
                    <h3 className='text-3xl font-extrabold'>AgileFlow</h3>
                    <p className='mt-2'>
                        I have successfully developed a web application inspired by Asana, used Framer Motion to focus on incorporating smooth and interactive animations, enhancing the overall user experience.
                    </p>
                    <h3 className='mt-4 text-xl md:mt-6 lg:mt-8 font-jost' >
                        Technologies Used
                    </h3>
                    <div className='flex flex-wrap gap-2 mt-1 mb-6'>
                        <p className='px-2 py-0.5 rounded-md border border-white border-opacity-20 font-SpaceGrotesk techBg w-fit'>
                            NextJS
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            Framer Motion
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            Shadcn
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            Tailwind CSS
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk border border-white border-opacity-20 techBg w-fit'>
                            NodeMailer
                        </p>
                    </div>
                    <a href="https://agileflow-agile.vercel.app/" target='_blank'>
                        <span> VIEW WEBSITE<HiOutlineArrowUpRight className='inline-block ml-2' /></span>
                    </a>
                </section>
            </div>
            <div className='h-[90vh] bg-[#5d57c9] flex flex-col lg:flex-row justify-center items-center gap-6 xl:gap-16  py-6  xl:px-16 xl:py-6 md:px-4'>
                <Image src={insightSphere} alt='contact' width={800} height={800} loading='lazy'
                    className='w-[95%] h-[80%] lg:w-[50%] rounded-lg'
                />
                <section className='xl:w-[30%] px-4 '>
                    <h3 className='text-3xl font-extrabold'>InsightSphere</h3>
                    <p className='mt-2'>
                        Developed a comprehensive and user-friendly admin dashboard.It serves as a powerful tool for efficiently managing and visualizing data, ensuring a seamless and intuitive experience for administrators
                    </p>
                    <h3 className='mt-4 text-xl md:mt-6 lg:mt-8 font-jost' >
                        Technologies Used
                    </h3>
                    <div className='flex flex-wrap gap-2 mt-1 mb-6'>
                        <p className='px-2 py-0.5 rounded-md border border-white border-opacity-20 font-SpaceGrotesk techBg w-fit'>
                            NextJS
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            MongoDB
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            Tailwind CSS
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk border border-white border-opacity-20 techBg w-fit'>
                            Recharts
                        </p>
                    </div>
                    <a href="https://insight-sphere-dashboard.vercel.app/" target='_blank'>
                        <span> VIEW WEBSITE<HiOutlineArrowUpRight className='inline-block ml-2' /></span>
                    </a>
                </section>
            </div>
            <div className='h-[90vh] bg-[#255058] flex flex-col lg:flex-row justify-center items-center gap-6 xl:gap-16  py-6  xl:px-16 xl:py-6 md:px-4'>
                <Image src={agileboard} alt='contact' width={800} height={800} loading='lazy'
                    className='w-[95%] h-[80%] lg:w-[50%] rounded-lg'
                />
                <section className='xl:w-[30%] px-4 '>
                    <h3 className='text-3xl font-extrabold'>AgileBoard</h3>
                    <p className='mt-2'>
                        Adeptly utilizing NextAuth for seamless authentication, demonstrated through the creation of a dynamic Kanban board enabling users to manage tasks effectively from 'To-Do' to 'Done' with customizable columns.
                    </p>
                    <h3 className='mt-4 text-xl md:mt-6 lg:mt-8 font-jost' >
                        Technologies Used
                    </h3>
                    <div className='flex flex-wrap gap-2 mt-1 mb-6'>
                        <p className='px-2 py-0.5 rounded-md border border-white border-opacity-20 font-SpaceGrotesk techBg w-fit'>
                            NextJS
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            next-auth
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            TypeScript
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk border border-white border-opacity-20 techBg w-fit'>
                            dnd-kit
                        </p>
                    </div>
                    <a href="https://agile-board-khan.vercel.app/" target='_blank'>
                        <span> VIEW WEBSITE<HiOutlineArrowUpRight className='inline-block ml-2' /></span>
                    </a>
                </section>
            </div>

            <div className='h-[90vh] bg-[#6D214F] flex flex-col lg:flex-row justify-center items-center gap-6 xl:gap-16  py-6  xl:px-16 xl:py-6 md:px-4'>
                <Image src={googleclone} alt='contact' width={800} height={800} loading='lazy'
                    className='w-[95%] h-[80%] lg:w-[50%] rounded-lg'
                />
                <section className='xl:w-[30%] px-4 '>
                    <h3 className='text-3xl font-extrabold'>Google Clone</h3>
                    <p className='mt-2'>
                        Created a fully functional Google clone using Next.js and integrated secure authentication with NextAuth, showcasing frontend expertise and authentication implementation skills.
                    </p>
                    <h3 className='mt-4 text-xl md:mt-6 lg:mt-8 font-jost' >
                        Technologies Used
                    </h3>
                    <div className='flex flex-wrap gap-2 mt-1 mb-6'>
                        <p className='px-2 py-0.5 rounded-md border border-white border-opacity-20 font-SpaceGrotesk techBg w-fit'>
                            NextJS
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            next-auth
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            Tailwind CSS
                        </p>

                    </div>
                    <a href="https://google-clone-khan.vercel.app/" target='_blank'>
                        <span> VIEW WEBSITE<HiOutlineArrowUpRight className='inline-block ml-2' /></span>
                    </a>
                </section>
            </div>
            <div className='h-[90vh] bg-[#070c22] flex flex-col lg:flex-row justify-center items-center gap-6 xl:gap-16  py-6  xl:px-16 xl:py-6'>
                <Image src={spaceTourism} alt='contact' width={800} height={800} loading='lazy'
                    className='w-[95%] h-[80%] lg:w-[50%] rounded-lg'
                />
                <section className='xl:w-[30%] px-4 '>
                    <h3 className='text-3xl font-extrabold'>SpaceTourism</h3>
                    <p className='mt-2'>
                        Developed a responsive multi-page Space Tourism website using React.js, Tailwind CSS, and Figma designs, offering seamless navigation, tabbed content, and interactive hover states for an engaging user experience.
                    </p>
                    <h3 className='mt-4 text-xl md:mt-6 lg:mt-8 font-jost' >
                        Technologies Used
                    </h3>
                    <div className='flex flex-wrap gap-2 mt-1 mb-6'>
                        <p className='px-2 py-0.5 rounded-md border border-white border-opacity-20 font-SpaceGrotesk techBg w-fit'>
                            ReactJS
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            Tailwind CSS
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk border border-white border-opacity-20 techBg w-fit'>
                            figma
                        </p>
                    </div>
                    <a href="https://mudassirkhan2.github.io/spaceTourism/" target='_blank'>
                        <span> VIEW WEBSITE<HiOutlineArrowUpRight className='inline-block ml-2' /></span>
                    </a>
                </section>
            </div>
            <div className='h-[90vh] bg-[#3B3B98] flex flex-col lg:flex-row justify-center items-center gap-6 xl:gap-16  py-6  xl:px-16 xl:py-6 md:px-4'>
                <Image src={ipaddresstracker} alt='contact' width={800} height={800} loading='lazy'
                    className='w-[95%] h-[80%] lg:w-[50%] rounded-lg'
                />
                <section className='xl:w-[30%] px-4 '>
                    <h3 className='text-3xl font-extrabold'>IP Address Tracker</h3>
                    <p className='mt-2'>
                        IP-Address-Tracker is a web app that provides a convenient and efficient way to track the geographical location of IP addresses.
                    </p>
                    <h3 className='mt-4 text-xl md:mt-6 lg:mt-8 font-jost' >
                        Technologies Used
                    </h3>
                    <div className='flex flex-wrap gap-2 mt-1 mb-6'>
                        <p className='px-2 py-0.5 rounded-md border border-white border-opacity-20 font-SpaceGrotesk techBg w-fit'>
                            HTML
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            CSS
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            JavaScript
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk border border-white border-opacity-20 techBg w-fit'>
                            leafletjs
                        </p>
                    </div>
                    <a href="https://mudassirkhan.me/IP-Address-Tracker/" target='_blank'>
                        <span> VIEW WEBSITE<HiOutlineArrowUpRight className='inline-block ml-2' /></span>
                    </a>
                </section>
            </div>
            <div className='h-[90vh] bg-[#243862]  bg-opacity-40 flex flex-col lg:flex-row justify-center items-center gap-6 xl:gap-16  py-6  xl:px-16 xl:py-6 md:px-4'>
                <Image src={liftsimulation} alt='contact' width={800} height={800} loading='lazy'
                    className='w-[95%] h-[80%] lg:w-[50%] rounded-lg'
                />
                <section className='xl:w-[30%] px-4'>
                    <h3 className='text-3xl font-extrabold'>LiftSimulation</h3>
                    <p className='mt-2'>
                        Engineered a lifelike simulated elevator system using HTML, CSS, and JS, featuring dynamic generation of lifts and floors, realistic movement, and efficient handling of concurrent requests for an immersive user experience.
                    </p>
                    <h3 className='mt-4 text-xl md:mt-6 lg:mt-8 font-jost' >
                        Technologies Used
                    </h3>
                    <div className='flex flex-wrap gap-2 mt-1 mb-6'>
                        <p className='px-2 py-0.5 rounded-md border border-white border-opacity-20 font-SpaceGrotesk techBg w-fit'>
                            HTML
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            CSS
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            JavaScript
                        </p>

                    </div>
                    <a href="https://mudassirkhan.me/Lift-Simulation/" target='_blank'>
                        <span> VIEW WEBSITE<HiOutlineArrowUpRight className='inline-block ml-2' /></span>
                    </a>
                </section>
            </div>
            <div className='h-[90vh] bg-[#00090D] flex flex-col lg:flex-row justify-center items-center gap-6 xl:gap-16  py-6  xl:px-16 xl:py-6 md:px-4'>
                <Image src={weatherapp} alt='contact' width={800} height={800} loading='lazy'
                    className='w-[95%] h-[80%] lg:w-[50%] rounded-lg'
                />
                <section className='xl:w-[30%] px-4 '>
                    <h3 className='text-3xl font-extrabold'>WeatherApp</h3>
                    <p className='mt-2'>
                        Developed a dynamic React.js weather app with Tailwind CSS, leveraging OpenWeatherMap API for real-time updates, allowing users to effortlessly check current weather details, toggle units, and enjoy responsive design across various devices.
                    </p>
                    <h3 className='mt-4 text-xl md:mt-6 lg:mt-8 font-jost' >
                        Technologies Used
                    </h3>
                    <div className='flex flex-wrap gap-2 mt-1 mb-6'>
                        <p className='px-2 py-0.5 rounded-md border border-white border-opacity-20 font-SpaceGrotesk techBg w-fit'>
                            ReactJS
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            Tailwind CSS
                        </p>

                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk  border border-white border-opacity-20 techBg w-fit'>
                            OpenWeatherMap API
                        </p>
                        <p className='px-2 py-0.5 rounded-md font-SpaceGrotesk border border-white border-opacity-20 techBg w-fit'>
                            react-animated-weather
                        </p>
                    </div>
                    <a href="https://mudassirkhan.me/weatherApp/" target='_blank'>
                        <span> VIEW WEBSITE<HiOutlineArrowUpRight className='inline-block ml-2' /></span>
                    </a>
                </section>
            </div>

            <div>
                <li className='px-2 py-1 mx-auto mt-4 text-center list-none transition duration-500 ease-in-out rounded-lg cursor-pointer hover:text-primary outline-primary outline-dashed outline-1 text-cyan-500 hover:shadow-2xl hover:shadow-cyan-600 w-fit'>
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
