import React from 'react'

const Projects = () => {
  return (
    <div id='Proyectos' className='min-h-screen w-full flex flex-col items-center
    justify-center gap-20 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl'>Proyectos</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">

        <div className="text-left space-y-2 border-2 hover:scale-105
        transition-all duration-200 cursor-pointer px-8 py-10
        border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>Project Name</h1>
          <h3 className='text-xl text-gray-700'>Tecnologias utilizadas:</h3>
          <p className='text-sm text-gray-600'>Descripcion del proyecto: Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown</p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105
        transition-all duration-200 cursor-pointer px-8 py-10
        border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>Project Name</h1>
          <h3 className='text-xl text-gray-700'>Tecnologias utilizadas:</h3>
          <p className='text-sm text-gray-600'>Descripcion del proyecto: Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown</p>
        </div>
      </div>
    </div>
  )
}

export default Projects