import React from 'react'
import image from '../assets/image.png'
import { BiLogoGithub, BiLogoWhatsapp } from 'react-icons/bi'

const Home = () => {
  return (
    <div id='Inicio' className='flex min-h-screen w-full items-center justify-center bg-background'>

      <div className="flex flex-col items-center justify-center
      gap-8 p-5 pt-0 text-center">
        
        <div className="space-y-1 sm:space-y-3">
          <h1 className='bg-gradient-to-r from-gradient1 to-gradient2
          bg-clip-text text-4xl font-semibold text-transparent
          md:text-5xl lg:text-6xl'>Novello Alexis</h1>
          <h3 className='bg-gradient-to-r from-gradient1 to-gradient2
          bg-clip-text text-xl font-semibold text-transparent
          md:text-2xl lg:text-3xl'>Desarrollador</h3>
          <p className='max-w-[500px] text-1xl text-text'>Hola! Soy Alexis y tengo 26 años. Actualmente estoy cursando el tercer año de la carrera
            Tecnico Superior en Desarrollo de Software en la escuela Domingo Guzman Silva, me interesa aprender y desarrollar aplicaciones, tanto web
            como de escritorio, en particular me gustaria enfocarme en el apartado del backend.
          </p>
        </div>

        <div className="flex gap-3">
          <a href="https://github.com/alexisnovello" target="_blank" rel="noopener noreferrer">
            <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full
            border-2 border-transparent bg-accent p-2 text-text
            transition-all duration-200 hover:scale-110 hover:border-accent
            hover:bg-text hover:text-accent md:h-12 md:w-12' />
          </a>

          <a href="https://wa.me/5493424725825" target="_blank" rel="noopener noreferrer">
            <BiLogoWhatsapp className='h-10 w-10 cursor-pointer rounded-full
            border-2 border-transparent bg-accent p-2 text-text
            transition-all duration-200 hover:scale-110 hover:border-accent
            hover:bg-text hover:text-accent md:h-12 md:w-12' />
          </a>

          <a href="cv-alexis.pdf" download="cv-alexis.pdf" className='flex items-center gap-2 cursor-pointer rounded-full
          border-2 border-transparent bg-accent p-2 text-text font-semibold
          text-sm transition-all duration-200 hover:scale-105 hover:border-accent
          hover:bg-text hover:text-accent md:h-12 md:px-6 md:text-base'>Descargar CV</a>
        </div>
      </div>
    </div>
  )
}

export default Home