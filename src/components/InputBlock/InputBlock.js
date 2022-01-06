import React from 'react'

const InputBlock = (props) => {

  return (
    <div className='w-full mx-auto my-4 flex flex-col justify-center items-center '>

      <label className='h3'>{props.name}</label>

      {(props.name === 'Pixel')
        ?
        <input
          type={'text'}
          value={props.value}
          onChange={event => props.settingPixel(event.target.value)}
          className='border border-gray-600 outline-none w-4/5 p-4 rounded-lg text-center text-lg font-semibold' />
        :
        <input
          type={'text'}
          value={props.value}
          onChange={event => props.settingRem(event.target.value)}
          className='border border-gray-600 outline-none w-4/5 p-4 rounded-lg text-center text-lg font-semibold' />
      }

    </div>
  )
}

export default InputBlock
