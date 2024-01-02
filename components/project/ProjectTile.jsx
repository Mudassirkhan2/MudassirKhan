import Image from 'next/image';
import React from 'react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import Reveal from '../common/Reveal';

export const ProjectTile = ({ imageSrc, title, description, technologies, websiteLink, backgroundColor }) => {
    return (
        <div className={`h-[90vh] sticky top-0  flex flex-col lg:flex-row justify-center items-center gap-6 xl:gap-16  py-6  xl:px-16 xl:py-6 md:px-4`}
            style={
                {
                    background: backgroundColor
                }
            }
        >
            <Image src={imageSrc} alt={title} width={800} height={800} loading='lazy' className='w-[95%] h-[80%] lg:w-[50%] rounded-lg'
            />
            <section className='xl:w-[30%] px-4'>
                <Reveal>
                    <h3 className='text-3xl font-extrabold'>{title}</h3>
                </Reveal>
                <Reveal>
                    <p className='mt-2'>{description}</p>
                </Reveal>
                <Reveal>
                    <h3 className='mt-4 text-xl md:mt-6 lg:mt-8 font-jost'>Technologies Used</h3>
                </Reveal>
                <div className='flex flex-wrap gap-2 mt-1 mb-6'>
                    {technologies.map((tech, index) => (
                        <Reveal key={index}>
                            <p className='px-2 py-0.5 rounded-md border border-white border-opacity-20 font-SpaceGrotesk techBg w-fit'>
                                {tech}
                            </p>
                        </Reveal>
                    ))}
                </div>
                <a href={websiteLink} target='_blank'>
                    <Reveal>
                        <span> VIEW WEBSITE<HiOutlineArrowUpRight className='inline-block ml-2' /></span>
                    </Reveal>

                </a>
            </section>
        </div>
    );
};