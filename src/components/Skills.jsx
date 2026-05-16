import React from 'react'
import { SlScreenDesktop } from 'react-icons/sl'

const Skills = () => {
  return (
    <div id='Habilidades' className='flex min-h-screen w-full flex-col
    items-center justify-center gap-20 p-14 pt-10 pb-5 md:p-20 md:pt-10 lg:p-36 lg:pt-10 bg-background'>
      <h1 className='text-center text-text text-5xl font-light'>Conocimientos técnicos y habilidades</h1>

      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">

        <div className="flex-1">
          <div className="relative space-y-1 text-text border-l-2 p-8 text-left">
            <h3 className='text-xl text-text font-semibold md:text-2xl'>Frontend</h3>
            <p className='font-light text-text text-sm'>
              ▶ React.
              <br />
              ▶ Tailwind CSS.
              <br />
              ▶ HTML.
              <br />
              ▶ CSS.
              </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-accent'></span>
          </div>

          <div className="relative space-y-1 text-text border-l-2 p-8 text-left">
            <h3 className='text-xl text-text font-semibold md:text-2xl'>Herramientas</h3>
            <p className='font-light text-text text-sm'>
              ▶ Git.
              <br />
              ▶ GitHub.
              <br />
              ▶ Visual Studio Code.
              <br />
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-accent'></span>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative space-y-1 text-text border-l-2 p-8 text-left">
            <h3 className='text-xl text-text font-semibold md:text-2xl'>Lenguajes</h3>
            <p className='font-light text-text text-sm'>
              ▶ C++
              <br />
              ▶ Realizando curso de Java.
              <br />
              <br />
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-accent'></span>
          </div>

          <div className="relative space-y-1 text-text border-l-2 p-8 text-left">
            <h3 className='text-xl text-text font-semibold md:text-2xl'>Blandas</h3>
            <p className='font-light text-text text-sm'>
              ▶ Ingles tecnico.
              <br />
              ▶ Trabajo en equipo.
              <br />
              ▶ Adaptabilidad.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-accent'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills