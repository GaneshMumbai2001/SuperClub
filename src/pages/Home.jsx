"use client"

import React from 'react';
import Image from 'next/image'


const Home= () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
      <h1 className='text-white mb-4 sm:text-5xl lg:text-4xl font-extrabold'>
       <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'> 
       Hello!Welcome to the {""}
       </span>
 
        </h1>
      <p className='text-transparent lg:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold'>
       SuperClub
        </p>
        <div>
          <button className='px-8 py-5 w-full  sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-sky-500 to-pink-500 hover:bg-slate-200 text-white'>hi</button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  text-white mt-3'>
             <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'> Connect Wallet </span>
            </button>
        </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 g'>
     
        </div>
        </div>
    </section>
  );
};

export default Home;