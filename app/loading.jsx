import React from 'react'
import Loader from "../public/assets/loader.svg"
import Image from 'next/image'
const Loading = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <Image src={Loader} alt="Loading..."
        width={300} height={300}
        className=' mix-blend-color-burn' />
    </div>
  )
}

export default Loading
