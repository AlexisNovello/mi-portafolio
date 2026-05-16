import React from 'react'
import project1 from '../assets/project1.jpg'

const Projects = () => {
  return (
    <div id='Proyectos' className='min-h-screen w-full flex flex-col items-center
    justify-center gap-20 pt-20 md:p-30 md:pt-10 lg:p-50 lg:pt-10 lg:pb-20 bg-background'>
      <h1 className='text-center text-text text-6xl'>Proyectos</h1>

      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">

        <a href="https://github.com/AlexisNovello/Prestacion-de-netbooks" target="_blank" rel="noopener noreferrer">
          <div className="text-left text-text space-y-2 border-2 hover:scale-102
          transition-all duration-200 cursor-pointer px-0 py-0
          border-accent rounded-lg hover:bg-secondary">
            <h1 className='text-3xl font-semibold text-center pt-2'>Sistema de prestación de netbooks</h1>
            <h3 className='text-xl text-text text-center'>Tecnologias: C++, Zinjal.</h3>
            <p className='text-sm text-text text-center px-5 justify-center'>
              Software por consola de comandos que permite que el usuario pueda gestionar de manera rápida y segura la
              prestación de notebooks. Permite registrar un prestamo y su devolucion, guardando los datos en documentos de texto.
            </p>
            <img src={project1} alt="" className='w-full rounded-lg mx-auto' />
          </div>
        </a>

      </div>
    </div>
  )
}

export default Projects