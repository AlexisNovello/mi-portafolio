import React from 'react'
import image from '../assets/image.png'
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

const Home = () => {
  return (
    <div id='Inicio' className='flex min-h-screen w-full items-center justify-center'>

      <div className="flex flex-col items-center justify-center
      gap-8 p-5 text-center">
        
        <img src={image} alt="" className='w-[250px] sm:w-[300px] rounded-full' />
        
        <div className="space-y-1 sm:space-y-3">
          <h1 className='bg-gradient-to-r from-teal-400 to-teal-600
          bg-clip-text text-4xl font-semibold text-transparent
          md:text-5xl lg:text-6xl'>Novello Alexis</h1>
          <h3 className='bg-gradient-to-r from-teal-400 to-teal-600
          bg-clip-text text-xl font-semibold text-transparent
          md:text-2xl lg:text-3xl'>Desarrollador</h3>
          <p className='max-w-[500px] text-sm text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className="flex gap-3">
          <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full
          border-2 border-transparent bg-teal-600 p-2 text-white
          transition-all duration-200 hover:scale-110 hover:border-teal-600
          hover:bg-white hover:text-teal-600 md:h-12 md:w-12' />

          <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full
          border-2 border-transparent bg-teal-600 p-2 text-white
          transition-all duration-200 hover:scale-110 hover:border-teal-600
          hover:bg-white hover:text-teal-600 md:h-12 md:w-12' />

          <a href className='flex items-center gap-2 cursor-pointer rounded-full
          border-2 border-transparent bg-teal-600 p-2 text-white font-semibold
          text-sm transition-all duration-200 hover:scale-105 hover:border-teal-600
          hover:bg-white hover:text-teal-600 md:h-12 md:px-6 md:text-base'>Descargar CV</a>
        </div>
      </div>
    </div>
  )
}

export default Home