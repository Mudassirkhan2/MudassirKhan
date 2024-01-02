import Contact from '@/components/common/Contact';
import Cursor from '@/components/common/Cursor'
import NavBarProjects from '@/components/project/NavBarProjects';
import ProjectSection from '@/components/project/ProjectSection';
const page = () => {
    return (
        <main className="relative min-h-screen mx-auto text-white ">
            <NavBarProjects />
            <ProjectSection />
            <Contact />
            <Cursor />
        </main>
    )
}

export default page
