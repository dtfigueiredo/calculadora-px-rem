import React from 'react'
import Calculator from '../Calculator/Calculator'

const Content = () => {
  return (
    <main className='w-full sm:w-3/5 mx-auto mt-2'>
      <h2 className='text-center h2'>How the conversion works</h2>

      <p className='paragraph'>
        This calculator converts pixels to the CSS unit REM. The conversion is based on the default font-size of <span className='font-bold'>16</span>. With the CSS rem unit you can define a size relative to the font-size of the HTML root tag.
      </p>

      <Calculator />
    </main>
  )
}

export default Content
