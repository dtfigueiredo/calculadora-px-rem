import React from 'react'

const InputBlock = (props) => {
  const pixelTrue = (props.name === 'Pixel')
  const value = (pixelTrue ? props.value : props.value)
  const onChange = (pixelTrue ? props.settingPixel : props.settingRem)
  const onFocus = (pixelTrue ? props.focusingPixel : props.focusingRem)

  return (
    <div className='w-full mx-auto my-4 flex flex-col justify-center items-center '>

      <label htmlFor={props.id} className='h3'>{props.name}</label>

      <input
        type='text'
        id={props.id}
        value={value}
        onChange={event => { onChange(event.currentTarget.value) }}
        onFocus={event => { onFocus(event.currentTarget.value) }}
        className='border border-gray-600 outline-none w-4/5 p-4 rounded-lg text-center text-lg font-semibold' />

    </div>
  )
}

export default InputBlock