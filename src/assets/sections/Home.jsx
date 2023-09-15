import React from 'react'

const Home = () => {
  return (
    <section className='relative flex flex-col min-h-[90vh] bg-brown z-[1]'>
        <h1 className='sm:py-64 py-12 font-montserrat self-center text-secondary text-8xl'>Barnabe Debocq</h1>
        <div className="absolute flex flex-col items-center bottom-[10vh] left-1/2 translate-x-[-50%] ">
            <div className="relative w-[50px] h-[80px] border-[3px] border-solid border-[#ffffff] rounded-[25px]">
                <div className="absolute w-[10px] top-[15px] left-1/2 translate-x-[-50%] h-[10px] bg-white rounded-[50%] animate-[scrollAnimatedMouse_2s_infinite]"></div>
            </div>
            <div className="relative">
                <p className='opacity-0 sm:opacity-100 sm:pt-[20px] sm:text-white'>Scroll Down</p>
                <p className="opacity-100 text-white sm:opacity-0 sm:absolute sm:top-0">Drag & drop</p>
            </div>
        </div>
    </section>
  )
}

export default Home