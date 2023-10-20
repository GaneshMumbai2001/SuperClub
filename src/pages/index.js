"use client"

import React from 'react';
import About from './About'


const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 bg-[#000000]'>
        <div className='col-span-7 place-self-center text-center sm:text-center'>
      <h1 className='text-white mb-4 sm:text-10xl lg:text-8xl font-extrabold'>
       <span className='text-transparent bg-clip-text text-center bg-gradient-to-r from-purple-400 to-pink-400 text-center'> 
       Hello! Welcome to the{""}
       </span>
 
        </h1>
      <p className='text-[#ADB7BE] text-base sm:text-lg mb-10 lg:text-5xl'>
       SuperClub
        </p>
        <div>
          <button className='px-7 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-sky-500 to-pink-500 hover:bg-slate-200 text-white '>Hi</button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:big-slate-800 hover:bg-slate-800 text-white mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Connect Wallet </span>
            </button>
        </div>
        </div>
        {/* <div className='col-span-5 place-self-center mt-4 ;g'> 
          <div className='w-full sm:w-fit rounded-full bg-[#181818] w-[250px] h-[250]'>
          <Image
            src={profile}
            alt="profile"
            width="250px"
            height="350px"
    />
        </div>
        */}
  <About/>
        </div>
    </section>
  );
};

export default HeroSection;