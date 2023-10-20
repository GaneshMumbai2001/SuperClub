"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit';
import About from './About';
import challengesData from './reward'


const HeroSection = () => {
  return (
    <section>
      <div className=' bg-[#000000]'>
      <div className='place-self-center text-center xl:text-center'>
      <div className='flex justify-between mx-10'>
      <div className='text-white mb-4 lg:md:text-10xl xl:lg:text-8xl font-extrabold'>
       <span className='pl-32 text-transparent pd-24   text-center md:bg-clip-text  bg-gradient-to-r from-blue-400 to-blue-400  justifyContent:center alignItems: center d-flex '> 
       Hello <br /> Welcome to the SuperClub{""}
       </span>
        </div>
        <div className='mt-10'>
          <ConnectButton  />
        </div>
        </div>
      <p className='text-[#ADB7BE] md:text-base lg:text-5-xl mb-10 xl:lg:text-5xl mt-52'>
      Speak Freely, Earn Seamlessly.
      Your Voice , Your Rewards!
        </p>
        <div>
          <button className='md:px-10 py-1.5  font-bold rounded-lg  mr-4 bg-gradient-to-br from-blue-400 to-blue-600 hover:bg-slate-200 text-white items-center'>Earn</button> 
          
        </div>
        </div>

        </div>
    </section>
  );
};

export default HeroSection;