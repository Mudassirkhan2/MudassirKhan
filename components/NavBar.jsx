"use client"
import { useEffect, useRef, useState } from 'react';
import {  Link, animateScroll as scroll } from 'react-scroll';
import { RiMenuFoldLine } from 'react-icons/ri';
import { GiCrossedBones } from 'react-icons/gi';
import { transform, useScroll ,motion } from 'framer-motion';
const NavBar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(true);
    const handleToggle = ()=>{
      setShowMediaIcons(!showMediaIcons)
      
    }
    const handleLinkClick = () => {
      setShowMediaIcons(true)
    };
    const targetRef = useRef(null);
    const { scrollY } = useScroll(targetRef);
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
          window.removeEventListener('scroll', changeBackground);
        };
      }, []);
    
    
  return (
    <header className="fixed top-0 left-0 z-20 w-full " ref={targetRef} >
        <motion.nav className="flex items-center justify-between w-full max-w-6xl mx-auto transition duration-500 ease-in-out shadow-2xl select-none outline-dashed outline-2 outline-secondary"
        
        style={{ 
            backgroundColor: navbar ? '#0C134F' : 'transparent',
         }}
        >
            <div className='p-2 ml-2 text-4xl cursor-pointer font-Caveat lg:ml-4'>
            <Link
                to="hero"
                smooth={true}
                offset={-70}
                duration={500}
            ><span className='text-primary'>M</span><span className='font-bold text-red-500'>K</span>
                {/* <img src={logo} alt="space-tourism" className='w-12 h-12 max-w-none' /> */}
            </Link>
         </div>
        {
                showMediaIcons ? <RiMenuFoldLine className='absolute block text-2xl lg:hidden right-4' onClick={handleToggle}/> : " "
            }       
        <ul className={`space-x-7  text-2xl md:text-xl backdrop-blur-lg lg:opacity-100 lg:bg-transparent flex flex-col lg:items-center text-black lg:text-cyan-500 font-bold justify-center gap-5 absolute  lg:relative  lg:flex lg:p-4 lg:my-4 lg:rounded-md top-0 right-0 w-9/12 h-screen  z-50 lg:flex-row lg:h-fit lg:w-1/2  shadow-2xl outline-dashed outline-2  outline-secondary lg:backdrop-blur-none ${showMediaIcons ? "hidden" :"block"}`} >
            <GiCrossedBones className='absolute block top-4 right-4 Cross lg:hidden' onClick={()=>handleToggle()}/>
            <li className='transition duration-500 ease-in-out cursor-pointer hover:text-primary'>
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
    </motion.nav>
</header>
  )
}
export default NavBar
