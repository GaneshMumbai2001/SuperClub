"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit';
import About from './About';


const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12 bg-[#000000]'>
        <div className='col-span-7 place-self-center text-center xl:text-center'>
      <h1 className='text-white mb-4 md:lg:text-10xl xl:lg:text-8xl font-extrabold'>
       <span className='text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-400 md:text-center'> 
       Hello! Welcome to the SuperClub{""}
       </span>
 
        </h1>
      <p className='text-[#ADB7BE] md:text-base lg:text-5-xl mb-10 xl:lg:text-5xl'>
      Speak Freely, Earn Seamlessly.
       Your Voice , Your Rewards!
        </p>
        <div>
          <button className='px-12 py-3.5 w-full xl:lg:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-sky-500 to-pink-500 hover:bg-slate-200 text-white '>Earn</button>
          
          < button className='px-5 py-3 w-full xl:lg:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-sky-500 to-pink-500 hover:bg-slate-200 text-white '>ConnectButton</button>
        </div>
        </div>
   
          <About/>
        </div>
    </section>
  );
};

export default HeroSection;