"use client"
import Image from 'next/image';
import {  useEffect } from 'react';
import WowGif from '../app/assets/wow.gif';

const SecModal= ({ handleClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9996] grid h-screen w-screen animate-opacity place-content-center bg-base-100/60 text-center backdrop-blur"
      tabIndex={0}
    >
      <div
        className="relative flex flex-col items-center justify-center gap-2 px-2 outline-none magic-spaceInUp"
        style={{ animationDuration: '300ms' }}
      >
        <div className="relative aspect-video w-52 md:w-96">
          <div className="relative w-full h-full">
            <Image
              src={WowGif}
              layout="fill"
              alt="wow"
              className="z-[9997]"
            />
          </div>
          <div className="absolute top-0 left-0 z-[9998] flex h-32 w-5 -translate-x-1/2 -translate-y-1/2 scale-75  justify-center outline-none md:scale-100">
            {Array.from('Awesome Awesome Awesome').map((char, i) => (
              <span
                key={`${char}${i}`}
                className="absolute top-0 left-0 inline-block h-16 w-5 origin-[bottom_center]"
                style={{ rotate: `${i * 15}deg` }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <p className="text-primary before:text-base-200 md:text-lg">
          You have been on these page for last 15 seconds. Thank you{' '}
        </p>
        <p className="max-w-2xl mt-10 text-sm">
          <span className="text-primary">fact: </span> You can get the attention
          of the user in 15 seconds. If it bounces back early then you are not
          able to get attention. Thanks for being here for more than 15 sec
          lets have coffee and a session:
          <br />
          <br />
          <a
            href="https://twitter.com/Mudassir_222"
            className="text-base underline outline-none text-primary"
          >
           twitter/Mudassir_222
          </a>
        </p>
        <button
          onClick={handleClose}
          className="fixed w-10 transition-all duration-300 right-10 top-10 aspect-square before:absolute before:top-1/2 before:left-1/2 before:h-1 before:w-full before:origin-center before:-translate-x-1/2 before:-translate-y-1/2 before:-rotate-45 before:rounded-lg before:bg-primary before:transition-all before:duration-300 after:absolute after:top-1/2 after:left-1/2 after:h-1 after:w-full after:origin-center after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:rounded-lg after:bg-primary after:transition-all after:duration-300 hover:scale-110 hover:before:rotate-45 hover:after:-rotate-45 active:scale-95 md:absolute md:right-0 md:top-0 md:-translate-y-full"
        ></button>
      </div>
    </div>
  );
};

export default SecModal;