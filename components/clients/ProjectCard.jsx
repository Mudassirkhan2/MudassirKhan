"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({
    imageSrc,
    title,
    description,
    techStack,
    liveLink,
    githubLink,
    projectPortfolio,
    collaboratedWith,
    indexValue,
}) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const isEven = indexValue % 2 !== 0;
    const num = String(indexValue + 1).padStart(2, '0');

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-start`}
        >
            {/* Project image */}
            <div className="w-full lg:w-[55%] shrink-0">
                <div className="overflow-hidden rounded-xl border border-white/5 bg-white/[0.02]">
                    <Image
                        src={imageSrc}
                        width={800}
                        height={500}
                        alt={title}
                        loading="lazy"
                        className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Project info */}
            <div className="lg:w-[45%] flex flex-col justify-center pt-2">
                <span className="text-zinc-600 font-mono text-sm mb-3">{num}</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                    {description}
                    {collaboratedWith && (
                        <span className="block mt-2 text-zinc-500">
                            Collaborated with a cross-functional team of a PM, a designer, and a developer.
                        </span>
                    )}
                    {projectPortfolio && (
                        <a
                            href={projectPortfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-2 text-primary hover:underline text-sm"
                        >
                            View TabStacker portfolio →
                        </a>
                    )}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-7">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3">
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-primary text-black text-sm font-semibold rounded-md hover:bg-primary/80 transition-colors"
                        >
                            View website
                        </a>
                    )}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 border border-zinc-700 text-white text-sm font-semibold rounded-md hover:border-zinc-500 transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
