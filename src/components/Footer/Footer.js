import React from 'react'
import { FaGithubAlt } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer className='w-full mt-4 py-4 px-8 bg-emerald-700 flex justify-center items-center shadow-xl sm:absolute bottom-0 '>
      <>
        <p className='text-white mr-4 '>Desenvoldido por <span className='underline font-semibold'>Daniel Figueiredo</span>.</p>
      </>
      <nav>
        <ul className='flex justify-between items-center'>
          <li className='mx-2 text-2xl text-white '>
            <a href='https://github.com/dtfigueiredo' target='_blank' rel='noreferrer noopener'><FaGithubAlt /></a>
          </li>
          <li className='mx-2 text-2xl text-white '>
            <a href='https://www.linkedin.com/in/dtfigueiredo/' target='_blank' rel='noreferrer noopener'><BsLinkedin /></a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
