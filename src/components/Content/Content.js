import React from 'react'
import Calculator from '../Calculator/Calculator'

const Content = () => {
  return (
    <main className='w-full sm:w-4/5 mx-auto my-2'>
      <h2 className='text-center'>Pixels to Rem converter</h2>

      <p className='text-center'>This calculator asumes the root font-size of your project is <span className='font-bold'>16</span> pixels.</p>

      <Calculator />
    </main>
  )
}

export default Content
