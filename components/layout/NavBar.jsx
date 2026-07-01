"use client"
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { RiMenuFoldLine } from 'react-icons/ri';
import { GiCrossedBones } from 'react-icons/gi';

const navConfig = [
    { label: 'Home',     scrollTo: 'hero',     href: '/' },
    { label: 'About',    scrollTo: 'about',    href: '/#about' },
    { label: 'Projects', scrollTo: 'projects', href: '/projects' },
    { label: 'Contact',  scrollTo: 'contact',  href: '/#contact' },
];

const linkStyle = { fontSize: '14px', color: 'rgb(154,160,180)', padding: '9px 14px', borderRadius: '8px' };

const NavBar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [navHidden, setNavHidden] = useState(false);
    const pathname = usePathname();
    const isMain = pathname === '/';
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setNavHidden(scrollY.getPrevious() < latest);
    });

    const handleLinkClick = () => setShowMobileMenu(false);

    const NavItem = ({ item, mobile = false }) => {
        if (mobile) {
            const cls = "text-2xl cursor-pointer text-zinc-300 hover:text-white transition-colors duration-200";
            return isMain
                ? <ScrollLink to={item.scrollTo} smooth offset={-70} duration={500} onClick={handleLinkClick} className={cls}>{item.label}</ScrollLink>
                : <NextLink href={item.href} onClick={handleLinkClick} className={cls}>{item.label}</NextLink>;
        }

        const cls = "cursor-pointer hover:text-white transition-colors duration-200";
        return isMain
            ? <ScrollLink to={item.scrollTo} smooth offset={-70} duration={500} onClick={handleLinkClick} className={cls} style={linkStyle}>{item.label}</ScrollLink>
            : <NextLink href={item.href} onClick={handleLinkClick} className={cls} style={linkStyle}>{item.label}</NextLink>;
    };

    const Logo = () => {
        const inner = (
            <>
                {/* Outlined MK box — transparent bg, teal border + text */}
                <span style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '38px', height: '38px',
                    border: '1px solid rgb(62,232,164)',
                    borderRadius: '10px',
                    color: 'rgb(62,232,164)',
                    fontSize: '13px',
                    fontWeight: '600',
                    flexShrink: 0,
                }}>MK</span>
                <span className="text-white font-semibold text-sm">Mudassir Khan</span>
            </>
        );
        return isMain
            ? <ScrollLink to="hero" smooth offset={-70} duration={500} className="flex items-center gap-2.5 cursor-pointer select-none">{inner}</ScrollLink>
            : <NextLink href="/" className="flex items-center gap-2.5 select-none">{inner}</NextLink>;
    };

    return (
        <>
            <motion.header
                variants={{ visible: { y: 0 }, hidden: { y: '-105%' } }}
                animate={navHidden ? 'hidden' : 'visible'}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{ background: 'rgba(10,11,18,0.72)' }}
                className="fixed top-0 left-0 z-20 w-full border-b border-white/5 backdrop-blur-md"
            >
                <nav className="flex items-center justify-between w-full px-7 py-[14px]">
                    <Logo />

                    {/* Desktop — all items grouped right, no active highlighting */}
                    <div className="hidden lg:flex items-center">
                        {navConfig.map((item) => (
                            <NavItem key={item.label} item={item} />
                        ))}
                        <a
                            href="https://www.linkedin.com/in/mudassir-khan-522303233/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 font-semibold hover:opacity-80 transition-opacity"
                            style={{ background: 'rgb(62,232,164)', borderRadius: '9px', padding: '9px 16px', fontSize: '14px', color: '#06120c' }}
                        >
                            Résumé
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="block lg:hidden text-white cursor-pointer p-1"
                        onClick={() => setShowMobileMenu(true)}
                        aria-label="Open menu"
                    >
                        <RiMenuFoldLine className="text-2xl" />
                    </button>
                </nav>
            </motion.header>

            {/* Mobile overlay — sibling of motion.header to escape stacking context */}
            {showMobileMenu && (
                <div
                    className="fixed inset-0 flex flex-col items-center justify-center z-[200] lg:hidden backdrop-blur-md"
                    style={{ background: 'rgba(10,11,18,0.97)' }}
                >
                    <button
                        className="absolute top-5 right-6 text-white cursor-pointer p-1"
                        onClick={() => setShowMobileMenu(false)}
                        aria-label="Close menu"
                    >
                        <GiCrossedBones className="text-2xl" />
                    </button>
                    <ul className="flex flex-col items-center gap-8">
                        {navConfig.map((item) => (
                            <li key={item.label}>
                                <NavItem item={item} mobile />
                            </li>
                        ))}
                        <li>
                            <a
                                href="https://www.linkedin.com/in/mudassir-khan-522303233/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setShowMobileMenu(false)}
                                className="font-semibold"
                                style={{ background: 'rgb(62,232,164)', borderRadius: '9px', padding: '11px 24px', fontSize: '15px', color: '#06120c' }}
                            >
                                Résumé
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default NavBar;
