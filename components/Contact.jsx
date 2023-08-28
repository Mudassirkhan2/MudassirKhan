"use client"
import GithubIcon from '../app/assets/githubIcon.png';
import gmailIcon from '../app/assets/gmail.png';
import linkedinIcon from '../app/assets/linkedin.png';
import twitterIcon from '../app/assets/twitter.png';
import Image from 'next/image';
import { ElementWrapper } from './clients/client';
const Contact = () => {
  return (
    <ElementWrapper nameOfTheElement="contact">
      <section className='max-w-6xl p-2 mx-auto mt-10 '>
        <div className='flex justify-center w-full mb-8 gap-x-10'>
          <a href="https://www.linkedin.com/in/mudassir-khan-522303233/"
            target="_blank" className="cursor-pointer "
          >
            <Image src={linkedinIcon} alt='contact' width={50} height={50} loading='lazy' />
          </a>
          <a href="https://github.com/Mudassirkhan2"
            target="_blank" className="cursor-pointer "
          >
            <Image src={GithubIcon} alt='contact' width={50} height={50} loading='lazy' />
          </a>
          <a href="mailto:mudassir222001@gmail.com " target="_blank" className="cursor-pointer ">
            <Image src={gmailIcon} alt='contact' width={50} height={50} />
          </a>
          <a href="https://twitter.com/Mudassir_222"
            target="_blank" className="cursor-pointer "
          >
            <Image src={twitterIcon} alt='contact' width={50} height={50} loading='lazy' />
          </a>
        </div>
      </section>
    </ElementWrapper>
  )
}

export default Contact
