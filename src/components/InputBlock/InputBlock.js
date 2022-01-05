import React from 'react'

const InputBlock = ({ name }) => {
  return (
    <div className='w-full mx-auto my-8 flex flex-col justify-center items-center '>
      <label className='h3'>{name}</label>
      <input type={'text'} className='border border-gray-600 outline-none w-4/5 p-4 rounded-lg text-center text-lg font-semibold' />
    </div>
  )
}

export default InputBlock
