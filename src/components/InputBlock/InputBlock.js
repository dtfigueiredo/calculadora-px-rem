import React from 'react'

const InputBlock = ({ name }) => {
  return (
    <div className='w-full mx-auto my-8 flex flex-col justify-center items-center '>
      <label>{name}</label>
      <input type={'text'} className='' />
    </div>
  )
}

export default InputBlock
