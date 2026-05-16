import React from 'react'
import { BiBriefcase, BiCode, BiHome, BiMailSend, BiRightArrowAlt } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='md:flex-[1]'>

      {/*Desktop navbar */}
      <div className='min-h-screen top-0 hidden md:sticky md:flex
      items-center justify-center bg-navbar text-text'>
        <ul className='flex flex-col gap-10'>
          {["Inicio", "Habilidades", "Proyectos", "Contacto"].map((item) => (
            <li key={item} className='flex items-center justify-start
            cursor-pointer font-medium transition-all duration-200
            group sm:text-lg md:text-xl xl:text-3xl'>
              <BiRightArrowAlt className='text-4xl -translate-x-5
              opacity-0 transform transition-all duration-200
              group-hover:opacity-100 group-hover:translate-x-0' />

              <a href={`#${item}`} className='transition-all duration-200
              hover:translate-x-3'>{item}</a>

            </li>
          ))}
        </ul>
      </div>

      {/*Movile navbar */}
      <div className='fixed left-0 right-0 top-0 z-10 flex justify-evenly
      bg-navbar p-5 text-text md:hidden'>
        <a href='#Inicio' className='flex flex-col items-center justify-center hover:scale-110 transition-all'>
          <BiHome className='text-2xl' />
          <span className='text-xs'>Inicio</span>
        </a>
         <a href='#Habilidades' className='flex flex-col items-center justify-center hover:scale-110 transition-all'>
          <BiBriefcase className='text-2xl' />
          <span className='text-xs'>Habilidades</span>
        </a>
         <a href='#Proyectos' className='flex flex-col items-center justify-center hover:scale-110 transition-all'>
          <BiCode className='text-2xl' />
          <span className='text-xs'>Proyectos</span>
        </a>
         <a href='#Contacto' className='flex flex-col items-center justify-center hover:scale-110 transition-all'>
          <BiMailSend className='text-2xl' />
          <span className='text-xs'>Contacto</span>
        </a>
      </div>
    </div>
  )
}

export default Navbar