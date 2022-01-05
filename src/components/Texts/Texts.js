import React from 'react'

const Texts = () => {
  return (
    <div className='w-full lg:w-3/5 mx-auto flex flex-col justify-center items-center ' >
      <h3 className='h3'>
        EM vs. REM: The differences
      </h3>
      <p className='paragraph'>

        Inside a sinlge document, the length of a REM unit is everywhere the same, it can just differ between documents. EM on the other side can differ between every element, because it is relative to the elements own font-size (excpetion is the font-size itself, in it EM is relative to the parent).

        REM is the newer unit, older browsers don't support it.
      </p>

    </div>
  )
}

export default Texts
