import React from 'react'
import InputBlock from '../InputBlock/InputBlock'
import { FaExchangeAlt } from 'react-icons/fa'

const Calculator = () => {
  return (
    <div className='w-full lg:w-4/5 mx-auto flex flex-col sm:flex-row justify-center items-center ' >

      <InputBlock name={'Pixel'} />
      <FaExchangeAlt className='text-2 sm:text-4xl' />
      <InputBlock name={'REM'} />

    </div>
  )
}

export default Calculator
