"use client"
import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { RiMenuFoldLine } from 'react-icons/ri';
import { GiCrossedBones } from 'react-icons/gi';
const NavBar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(true);
    const [navHidden, setNavHidden] = useState(false)
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change",
        (latest) => {
            const prvious = scrollY.getPrevious()
            if (prvious > latest) {
                setNavHidden(false)
            }
            else {
                setNavHidden(true)
            }
        }
    )
    const handleToggle = () => {
        setShowMediaIcons(!showMediaIcons)
    }
    const handleLinkClick = () => {
        setShowMediaIcons(true)
    };


    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-105%" }

            }}
            animate={navHidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 z-20 w-full "  >
            <nav className="flex items-center justify-between w-full max-w-6xl mx-auto shadow-2xl select-none outline-dashed outline-2 outline-secondary bg-[#020024] ">
                <div className='p-2 ml-2 text-2xl cursor-pointer font-Caveat lg:ml-4 '>
                    <Link
                        to="hero"
                        smooth={true}
                        offset={-70}
                        duration={500}
                    ><span className=' text-primary'>Mudassir</span>
                        <span className='ml-2 font-bold text-red-500'>Khan</span>

                    </Link>
                </div>
                {
                    showMediaIcons ? <RiMenuFoldLine className='absolute block text-2xl lg:hidden right-4' onClick={handleToggle} /> : " "
                }
                <ul className={` md:space-x-7  text-2xl lg:mr-2 md:text-xl backdrop-blur-lg lg:opacity-100 lg:bg-transparent flex flex-col lg:items-center  text-cyan-500 font-bold justify-center gap-5 absolute  lg:relative  lg:flex lg:p-4 lg:my-4 lg:rounded-md top-0 right-0 w-9/12 h-screen  z-50  text-center lg:flex-row lg:h-fit lg:w-1/2  shadow-2xl outline-dashed outline-2  outline-secondary lg:backdrop-blur-none ${showMediaIcons ? "hidden" : "block"}`} >
                    <GiCrossedBones className='absolute block top-4 right-4 Cross lg:hidden' onClick={() => handleToggle()} />
                    <li className='transition duration-500 ease-in-out cursor-pointer hover:text-primary '>
                        <Link
                            to="hero"
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleLinkClick}
                        >
                            <span className='transition duration-500 ease-in-out hover:text-red-500'>Ho</span><span className='transition duration-500 ease-in-out hover:text-red-500'>me</span>
                        </Link>
                    </li>
                    <li className='transition duration-500 ease-in-out cursor-pointer hover:text-primary'>
                        <Link
                            to="about"
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleLinkClick}
                        >
                            <span className='transition duration-500 ease-in-out hover:text-red-500'>Ab</span><span className='transition duration-500 ease-in-out hover:text-red-500'>out</span>
                        </Link>
                    </li>
                    <li className='transition duration-500 ease-in-out cursor-pointer hover:text-primary'>
                        <Link
                            to="projects"
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleLinkClick}
                        >
                            <span className='transition duration-500 ease-in-out hover:text-red-500'>Pro</span><span className='transition duration-500 ease-in-out hover:text-red-500'>jects</span>
                        </Link>
                    </li>
                    <li className='transition duration-500 ease-in-out cursor-pointer hover:text-primary'>
                        <Link
                            to="contact"
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleLinkClick}
                        >
                            <span className='transition duration-500 ease-in-out hover:text-red-500'>Con</span><span className='transition duration-500 ease-in-out hover:text-red-500'>tacts</span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </motion.header>
    )
}
export default NavBar
