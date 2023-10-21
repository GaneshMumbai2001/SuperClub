const AboutSection = () => {

     
    return (
      <section className='text-white'>
        <div className='md:grid md:grid-cols gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
        <div className='mt-4 md:mt-0 text-left flex flex-col- h-full'></div>
        <div>
          <h2 className=' text-white mb-4 sm:text-5xl lg:text-4xl font-extrabold'> 
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'> 
         About Us {""}
         </span></h2>
          <p className='text-base lg:text-lg'>
          Welcome to our creative and innovative team at <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">SUPER HOUSE</span>, where passion meets expertise to build exceptional digital experiences. We are a group of skilled professionals, each bringing a unique set of talents to the table. Get to know the faces behind the scenes who are shaping the future of technology and design.
             </p>
             <div className='flex flex-row justify-start mt-8'>
            </div>
            <div className='mt-8'></div>
          </div>
        </div>
        </section>
    )
  }
  
  export default AboutSection