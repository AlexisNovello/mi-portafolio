import React from 'react'

const Contact = () => {
  return (
    <div id='Contacto' className='flex min-h-screen w-full flex-col items-center
    justify-center gap-16 pb-8 pt-20 bg-background'>
      <h1 className='text-center text-6xl text-text'>Contacto</h1>

      <form action="https://formspree.io/f/xredzqwy"
      method='POST'
      className='flex w-full max-w-md flex-col gap-8 rounded-lg p-6 pt-0
      md:max-w-lg lg:max-w-xl'>

        <div className='flex flex-col gap-4'>
          <input name='nombre' required
          type="text" placeholder="Nombre"
          className='rounded-lg text-text border-2 border-accent px-4 py-3 text-lg
          outline-none transition-all duration-200 hover:bg-secondary focus:ring-2
          focus:ring-accent' />

          <input name='email' required
          type="text" placeholder="Email"
          className='rounded-lg text-text border-2 border-accent px-4 py-3 text-lg
          outline-none transition-all duration-200 hover:bg-secondary focus:ring-2
          focus:ring-accent' />
        </div>

        <textarea name='mensaje' required
          placeholder="Mensaje" className='rounded-lg text-text h-32 w-full resize-none border-2
          border-accent px-4 py-3 text-lg outline-none transition-all duration-200
          hover:bg-secondary focus:ring-2 focus:ring-accent'></textarea>
        
        <button className='rounded-lg border-2 border-accent bg-secondary px-6 py-3
        font-semibold text-text hover:scale-101 transition-all duration-200 hover:bg-accent'
        target="_blank" rel="noopener noreferrer">Enviar</button>
      </form>
    </div>
  )
}

export default Contact