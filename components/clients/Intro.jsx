import Image from "next/image"
import Animate from "../../app/assets/animate.gif"
const Intro = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row'>
      <p className="w-11/12 mx-auto text-xl md:text-center md:text-2xl md:w-3/4 mt-9" > As a Skilled 
          <span className="text-teal-300"> Frontend Developer </span>
          my expertise lies in creating seamless and intuitive user experiences. I specialize in using cutting-edge technologies to produce high-quality web applications. Specifically, I have vast knowledge of ReactJS  which allow me to build complex and dynamic applications with ease.
      </p>
      <Image src={Animate} alt="Picture of the author" width={300} height={300} className="mx-auto rounded-full"></Image>
    </div>
  )
}

export default Intro
