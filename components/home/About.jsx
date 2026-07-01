import Image from 'next/image'
import FramerIcon from '../../public/assets/framer.png'
import { ElementWrapper } from '../clients/client'

const ICON_SIZE = { width: 40, height: 40 }

const TechCard = ({ src, alt, label, localSrc }) => (
    <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-200 w-[88px] h-[88px]">
        {localSrc ? (
            <Image src={localSrc} alt={alt} {...ICON_SIZE} className="w-9 h-9 object-contain" />
        ) : (
            <Image src={src} alt={alt} {...ICON_SIZE} className="w-9 h-9 object-contain" />
        )}
        <span className="text-zinc-400 text-[10px] text-center leading-tight">{label}</span>
    </div>
)

const frameworks = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg", alt: "Angular", label: "Angular" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg", alt: "Angular Material", label: "Ang. Material" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", label: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", label: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg", alt: "Ionic", label: "Ionic" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS", label: "Tailwind CSS" },
    { localSrc: FramerIcon, alt: "Framer Motion", label: "Framer Motion" },
]

const languages = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", label: "TypeScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", label: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", label: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5", label: "HTML5" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3", label: "CSS3" },
]

const tools = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", alt: "FastAPI", label: "FastAPI" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg", alt: "MongoDB", label: "MongoDB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git", label: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub", label: "GitHub" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma", label: "Figma" },
]

const statsCard = [
    { label: 'ROLE', value: 'Frontend Developer' },
    { label: 'FOCUS', value: 'Angular · React · Next.js' },
    { label: 'OPEN SOURCE', value: 'Active contributor' },
]

const About = () => {
    return (
        <ElementWrapper nameOfTheElement="about">
            <section className="relative max-w-6xl px-4 mx-auto py-20">
                <p className="text-primary font-mono text-sm tracking-widest mb-3">// about</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">Something about me</h2>

                <div className="flex flex-col lg:flex-row gap-10 mb-20">
                    {/* Bio text */}
                    <div className="lg:w-[58%] space-y-4 text-zinc-300 text-base leading-relaxed">
                        <p>
                            Hi, I&apos;m Mudassir — a front-end developer working professionally with{' '}
                            <strong className="text-white">Angular</strong>, with hands-on experience building
                            scalable web applications.
                        </p>
                        <p>
                            My expertise spans modern front-end technologies including Angular, FastAPI, Ionic,
                            Next.js and React, with a strong focus on reactive programming and component-based
                            architecture. Beyond client work, I actively contribute to open-source projects and
                            collaborate with cross-functional teams to solve complex problems through innovative
                            technical solutions.
                        </p>
                    </div>

                    {/* Stats card */}
                    <div className="lg:w-[42%]">
                        <div className="border border-white/8 rounded-xl overflow-hidden bg-white/[0.02]">
                            {statsCard.map(({ label, value }) => (
                                <div
                                    key={label}
                                    className="flex justify-between items-center px-5 py-4 border-b border-white/5"
                                >
                                    <span className="text-zinc-500 text-xs tracking-widest font-mono">{label}</span>
                                    <span className="text-white text-sm">{value}</span>
                                </div>
                            ))}
                            <div className="flex justify-between items-center px-5 py-4">
                                <span className="text-zinc-500 text-xs tracking-widest font-mono">STATUS</span>
                                <span className="text-primary text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Open to work
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech section */}
                <h3 className="text-white text-lg font-semibold mb-8">Tools &amp; languages I command</h3>

                <div className="space-y-8">
                    <div>
                        <p className="text-zinc-600 text-xs tracking-[0.2em] uppercase font-mono mb-4">
                            Frameworks &amp; Libraries
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {frameworks.map((item) => <TechCard key={item.label} {...item} />)}
                        </div>
                    </div>
                    <div>
                        <p className="text-zinc-600 text-xs tracking-[0.2em] uppercase font-mono mb-4">Languages</p>
                        <div className="flex flex-wrap gap-3">
                            {languages.map((item) => <TechCard key={item.label} {...item} />)}
                        </div>
                    </div>
                    <div>
                        <p className="text-zinc-600 text-xs tracking-[0.2em] uppercase font-mono mb-4">
                            Tools &amp; Platforms
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {tools.map((item) => <TechCard key={item.label} {...item} />)}
                        </div>
                    </div>
                </div>
            </section>
        </ElementWrapper>
    )
}

export default About
