import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex p-6 justify-between mb-10'>
        <h1 className='font-bold text-3xl'><span className='text-teal-400'>.</span>Phoenix<span className='text-teal-500'>()</span></h1>
        <div className=''>
            <ul className='flex gap-6 text-lg mr-10'>
                <li><h1 className='font-bold'><span className='text-teal-400'>.</span>about<span className='text-teal-500'>()</span></h1></li>
                <li><h1 className='font-bold'><span className='text-teal-400'>.</span>projects<span className='text-teal-500'>()</span></h1></li>
                <li><h1 className='font-bold'><span className='text-teal-400'>.</span>contact<span className='text-teal-500'>()</span></h1></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar

// Python, JavaScript, TypeScript, Django, Tailwind, MongoDB, NodeJS, Express, React