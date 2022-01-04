import React from 'react'

const Texts = () => {
  return (
    <div className='w-full lg:w-4/5 mx-auto flex flex-col sm:flex-row justify-center items-center ' >
      <p>
        This calculator converts pixels to the CSS unit REM. The conversion is based on the default font-size of 16 pixel, but can be changed.

        With the CSS rem unit you can define a size relative to the font-size of the HTML root tag.

        The conversion works of course in both directions, just change the opposite input field.
        An example

        So if we take the default size as an example, than 1px represents 0.0625rem and, in the other direction, 1rem represents 16px.
        EM vs. REM: The differences

        Inside a sinlge document, the length of a REM unit is everywhere the same, it can just differ between documents. EM on the other side can differ between every element, because it is relative to the elements own font-size (excpetion is the font-size itself, in it EM is relative to the parent).

        REM is the newer unit, older browsers don't support it.
      </p>
    </div>
  )
}

export default Texts
