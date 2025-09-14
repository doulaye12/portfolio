import React, { MouseEventHandler } from 'react'

export interface CtaProps {
    text: string;
    cta: MouseEventHandler
}

function Cta({text, cta}: CtaProps) {
  return (
    <button className='bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer  transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-101' onClick={cta} >{text}</button>
  )
}

export default Cta