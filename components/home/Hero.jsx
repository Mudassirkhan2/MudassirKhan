import GithubIcon from '../../public/assets/githubIcon.png';
import gmailIcon from '../../public/assets/gmail.png';
import linkedinIcon from '../../public/assets/linkedin.png';
import twitterIcon from '../../public/assets/twitter.jpg';
import Image from 'next/image';
import HeroAnimation from '../clients/HeroAnimation';
import { ElementWrapper } from '../clients/client';
export const metadata = {
    title: 'Mudassir Khan - Web Developer',
    description: 'Mudassir Khan Portfolio Frontend developer Based in India. Like to Play with Css.Tech Stack are React.JS, Next.JS, Tailwindcss',
}

const Hero = () => {
    return (
        <ElementWrapper nameOfTheElement="hero">
            <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden select-none">
                <div className='max-w-6xl p-2 rounded-lg shadow-2xl '>
                    <div className='absolute top-[15%] cursor-pointer left-[66%]  hidden lg:block'>
                        <a href="https://github.com/Mudassirkhan2"
                            target="_blank" rel="noopener noreferrer" className="cursor-pointer "
                        >
                            <Image
                                src={GithubIcon}
                                alt="Picture of the author"
                                width={70}
                                height={70}
                                className="rounded-full"
                            >

                            </Image>
                        </a>
                    </div>
                    <div className='absolute hidden cursor-pointer top-[15%] left-1/3 lg:block'>
                        <a
                            href="mailto:mudassir222001@gmail.com " target="_blank" rel="noopener noreferrer" className="cursor-pointer "
                        >
                            <Image
                                src={gmailIcon}
                                alt="Picture of the author"
                                width={70}
                                height={70}
                                className="rounded-full"
                            ></Image>
                        </a>
                    </div>
                    <div className='absolute left-0 hidden cursor-pointer top-3/4 lg:block' >
                        <a href="https://www.linkedin.com/in/mudassir-khan-522303233/"
                            target="_blank" rel="noopener noreferrer" className="cursor-pointer "
                        >
                            <Image
                                src={linkedinIcon}
                                alt="Picture of the author"
                                width={70}
                                height={70}
                                className="rounded-full"
                            ></Image>
                        </a>
                    </div>
                    <div className='absolute right-0 hidden cursor-pointer top-1/4 lg:block '>
                        <a href="https://twitter.com/Mudassir_222"
                            target="_blank" rel="noopener noreferrer" className="cursor-pointer "
                        >
                            <Image
                                src={twitterIcon}
                                alt="Picture of the author"
                                width={70}
                                height={70}
                                className="rounded-full mix-blend-screen"
                            ></Image>
                        </a>
                    </div>
                    <div className="flex flex-col w-full">
                        <HeroAnimation />
                        <p className="mt-3 mb-8 text-2xl text-center md:text-4xl "> a
                            <span className='text-[#B799FF]'>
                                <span className=' text-primary'> Web Developer </span>
                            </span>
                            From Hyderabad
                        </p>
                    </div>
                </div>
            </div>
        </ElementWrapper>
    )
}

export default Hero
