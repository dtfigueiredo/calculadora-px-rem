import React, { useState } from 'react'
import InputBlock from '../InputBlock/InputBlock'
import { FaExchangeAlt } from 'react-icons/fa'

const Calculator = () => {

  const [pixel, setPixel] = useState(16)
  const [rem, setRem] = useState(1)

  const handlePixelFocus = () => {
    setPixel('')
  }
  const handlePixelChange = (newPixel) => {
    let isnum = /^[\d.?!]+$/.test(newPixel)

    if (isnum) {
      setPixel(newPixel)
      let newRemValue = newPixel / 16
      setRem(newRemValue)
    }
  }

  const handleRemFocus = () => {
    setRem('')
  }
  const handleRemChange = (newRem) => {
    let isnum = /^[\d.?!]+$/.test(newRem)

    if (isnum) {
      setRem(newRem)
      let newPixelValue = newRem * 16
      setPixel(newPixelValue)
    }
  }

  return (
    <div className='w-full lg:w-4/5 mx-auto flex flex-col sm:flex-row justify-center items-center ' >

      <InputBlock
        value={pixel}
        settingPixel={handlePixelChange}
        focusingPixel={handlePixelFocus}
        name={'Pixel'}
      />

      <FaExchangeAlt className='text-2 sm:text-4xl' />

      <InputBlock
        value={rem}
        settingRem={handleRemChange}
        focusingRem={handleRemFocus}
        name={'REM'}
      />

    </div>
  )
}

export default Calculator