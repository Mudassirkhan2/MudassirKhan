export const metadata = {
    title: 'Projects',
    description: 'Browse all 55+ projects by Mudassir Khan — ERP systems, dashboards, Chrome extensions, and open-source work built with React, Next.js, Angular, FastAPI, and more.',
    alternates: { canonical: 'https://mudassir-khan.vercel.app/projects' },
    openGraph: {
        title: 'Projects — Mudassir Khan',
        description: 'Browse all 55+ projects by Mudassir Khan — ERP systems, dashboards, Chrome extensions built with React, Next.js, Angular, FastAPI, and more.',
        url: 'https://mudassir-khan.vercel.app/projects',
    },
    twitter: {
        title: 'Projects — Mudassir Khan',
        description: 'Browse all 55+ projects by Mudassir Khan.',
    },
}

import Cursor from '@/components/common/Cursor'
import NavBar from '@/components/layout/NavBar';
import ProjectsGrid from '@/components/project/ProjectsGrid';

const ProjectsPage = () => {
    return (
        <main className="relative min-h-screen mx-auto text-white">
            <NavBar />
            <ProjectsGrid />
            <Cursor />
        </main>
    )
}

export default ProjectsPage
