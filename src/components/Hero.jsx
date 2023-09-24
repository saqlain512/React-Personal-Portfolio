import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Hero = () => {
    return (
        <>
            <div name='home' className='w-full h-screen bg-[#0a192f] text-gray-300'>
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                    <p className='text-pink-600'>my name is</p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Saqlain Shahbaz</h1>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm an innovative Full Stack Developer with a passion for crafting seamless web experiences. I excel in both front-end and back-end development, ensuring websites not only look stunning but also function flawlessly</p>
                    <div>
                        <button className='text-white group border-2 flex justify-center items-center py-3 px-5 hover:bg-pink-600 hover:border-pink-600' >View Work
                        <span className='ml-2  group-hover:rotate-90 duration-300'> 
                            <HiArrowNarrowRight/>
                        </span></button>
                       
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
