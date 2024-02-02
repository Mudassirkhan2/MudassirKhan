import Contact from '@/components/common/Contact';
import Cursor from '@/components/common/Cursor'
import NavBarProjects from '@/components/project/NavBarProjects';
import ProjectSection from '@/components/project/ProjectSection';
import { HeroParallax } from '@/components/ui/hero-parallax';
import agileflow from '../../public/assets/agileflow.png';
import insightSphere from '../../public/assets/insightSphere.png';
import agileboard from '../../public/assets/agileboard.png';
import liftsimulation from '../../public/assets/liftsimulation.png';
import weatherapp from '../../public/assets/weatherapp.png';
import ipaddresstracker from '../../public/assets/ipaddresstracker.png';
import googleclone from '../../public/assets/googleclone.png';
import spaceTourism from '../../public/assets/spaceTourism.png';
import bugbounty from '../../public/assets/bugbounty.png';
import tabstacker from '../../public/assets/tabstacker.png';
import homefinder from '../../public/assets/homefinder.png';
const page = () => {
    const products = [
        {
            thumbnail: agileflow,
            title: 'AgileFlow',
            link: 'https://agileflow-agile.vercel.app/',
        },
        {
            thumbnail: homefinder,
            title: 'HomeFinder',
            link: 'https://home-finder-khan.vercel.app/',
        },
        {
            thumbnail: bugbounty,
            title: 'Bug Bounty Brigade 🛡️',
            link: 'https://www.bugbountybrigade.tech/',
        },
        {
            thumbnail: tabstacker,
            title: 'TabStacker',
            link: 'https://tabstacker.vercel.app/',
        },
        {
            thumbnail: insightSphere,
            title: 'InsightSphere',
            link: 'https://insight-sphere-dashboard.vercel.app/',
        },
        {
            thumbnail: agileboard,
            title: 'AgileBoard',
            link: 'https://agile-board-khan.vercel.app/',
        },
        {
            thumbnail: googleclone,
            title: "Google Clone",
            link: "https://google-clone-khan.vercel.app/",
        },
        {
            thumbnail: spaceTourism,
            title: "SpaceTourism",
            link: "https://mudassirkhan2.github.io/spaceTourism/",
        },
        {
            thumbnail: ipaddresstracker,
            title: "IP Address Tracker",
            link: "https://mudassirkhan.me/IP-Address-Tracker/",
        },
        {
            thumbnail: liftsimulation,
            title: "LiftSimulation",
            link: "https://mudassirkhan.me/Lift-Simulation/",
        },
        {
            thumbnail: weatherapp,
            title: "WeatherApp",
            link: "https://mudassirkhan.me/weatherApp/",
        },
        {
            thumbnail: tabstacker,
            title: 'TabStacker',
            link: 'https://tabstacker.vercel.app/',
        },
        {
            thumbnail: insightSphere,
            title: 'InsightSphere',
            link: 'https://insight-sphere-dashboard.vercel.app/',
        },
        {
            thumbnail: bugbounty,
            title: 'Bug Bounty Brigade 🛡️',
            link: 'https://www.bugbountybrigade.tech/',
        },
        {
            thumbnail: agileflow,
            title: 'AgileFlow',
            link: 'https://agileflow-agile.vercel.app/',
        },
        {
            thumbnail: insightSphere,
            title: 'InsightSphere',
            link: 'https://insight-sphere-dashboard.vercel.app/',
        },
    ];
    return (
        <main className="relative min-h-screen mx-auto text-white dottedBackground">
            <HeroParallax products={products} />
            <NavBarProjects />
            <ProjectSection />
            <Contact />
            <Cursor />
        </main>
    )
}

export default page
