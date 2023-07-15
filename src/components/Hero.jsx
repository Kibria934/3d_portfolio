import React from 'react'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='w-full z-0 h-screen relative'>
      <div className='absolute flex flex-row gap-5 max-w-7xl px-5 items-start top-28 md:left-20  lg:left-36'>
        {/* Left symbol */}
        <div className='flex justify-center mt-5 items-center flex-col'>
          <div className='w-5 h-5 bg-gradient-to-r from-black-100 to-cyan-500 rounded-full'></div>
          <div className='w-1 h-56 sm:h-80 b bg-gradient-to-t from-black-100 to-cyan-700'></div>
        </div>
        {/* content box start */}
        <div className=' text-4xl font-bold w-full flex flex-col items-start'>
          <code className='text-slate-500 text-lg'>&lt;H1&gt;</code>
          <div className='flex items-start flex-row'>
            <div className='w-[2px] ml-3 h-56 sm:h-36 bg-gradient-to-t from-black-100 to-slate-700'></div>
            {/* Head line */}
            <div className='flex text-left items-start  flex-col'>
              <p style={{ fontFamily: " 'Pangolin', cursive" }} className='pl-4'>Hi, I'm <span className='text-cyan-500 text-[popins]'>Kibria Hossain</span></p>
              <code className='text-slate-500 text-lg pl-1'>&lt;p&gt;</code>
              <p style={{ fontFamily: "'Pangolin', cursive" }} className='text-xl text-slate-200 tracking-wide border-l-2 border-slate-700 font-medium pl-2 ml-4'>I develop interactive user interface within<br className='sm:block hidden' /> React.js framework. and like to do 3d animation in web application.</p>
              <code className='text-slate-500 text-lg pl-1'>&lt;p&gt;</code>
            </div>
          </div>
          <code className='text-slate-500 text-lg'>&lt;H1&gt;</code>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero