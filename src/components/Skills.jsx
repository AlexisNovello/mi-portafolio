import React from 'react'

const Skills = () => {
  return (
    <div id='Habilidades' className='flex min-h-screen w-full flex-col
    items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
      <h1 className='text-center text-5xl font-light'>Habilidades</h1>

      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">

        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Nombre</h3>
            <p className='font-light text-gray-600 text-sm'>Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Nombre</h3>
            <p className='font-light text-gray-600 text-sm'>Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Nombre</h3>
            <p className='font-light text-gray-600 text-sm'>Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Nombre</h3>
            <p className='font-light text-gray-600 text-sm'>Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills