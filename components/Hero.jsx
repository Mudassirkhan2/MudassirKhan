import GithubIcon from '../app/assets/githubIcon.png';
import gmailIcon from '../app/assets/gmail.png';
import linkedinIcon from '../app/assets/linkedin.png';
import twitterIcon from '../app/assets/twitter.png';
import Image from 'next/image';
import HeroAnimation from './clients/HeroAnimation';
import { ElementWrapper } from './clients/client';

const Hero = () => {
    return (
    <ElementWrapper nameOfTheElement="hero">
        <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden select-none">
            <div className='max-w-6xl p-2 rounded-lg shadow-2xl '>
                <div className='absolute top-[10%] cursor-pointer left-[66%]  hidden lg:block'>
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
                <div className='absolute hidden cursor-pointer top-[10%] left-1/3 lg:block'>
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
                                className="rounded-full"
                            ></Image>
                    </a>
                </div>
                <div className="flex flex-col w-full">
                    <HeroAnimation />
                    <p className="mt-3 mb-8 text-2xl text-center md:text-4xl "> a
                        <span className='text-[#B799FF]'>
                        <span className=' text-primary'> Frontend  </span><span className='transition duration-500 ease-in-out hover:text-primary'>Developer </span>
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
