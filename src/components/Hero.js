import HeroImg from"../images/hero.png";

import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Hero(){
   const config ={
      subtitle:"Im a Full-stack Developer",
      social:{
        twitter:'',
        facebook:'',
        linkedin:''
      }
   }


    return (
    <section className='relative flex flex-col md:flex-row px-5 py-32  justify-center overflow-hidden animated-bg min-h-screen'>
           <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source
    src={`${process.env.PUBLIC_URL}/videos/hero.mp4`}
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
       <div className="absolute inset-0 bg-black/30"></div>

     <motion.div
     className="relative z-20 md:w-1/2 flex flex-col"
initial={{ opacity: 0, x: -80 }}
animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 1 }}
>

     <div className='md:w-1/2 flex flex-col' >
      <h1 className=' text-white text-6xl px-7
        font-hero-font '>Hi ,<br/> Im Malarvizhi
     <p className='text-white text-2xl'>{config.subtitle}</p>
      </h1>
      <div className='flex py-10 px-7 text-white'>
        <a href={config.social.twitter}className='pr-5 px-7 hover:text-white'><AiOutlineTwitter size={40} /></a>
        <a href={config.social.facebook}className='pr-5  hover:text-white'><AiOutlineFacebook size={40} /></a>
        <a href={config.social.linkedin}className='hover:text-white'><AiOutlineLinkedin size={40} /></a>
        
      </div>
      
     </div>
     </motion.div>

     <motion.div
       className="relative z-20 md:w-1/3 flex justify-center"
       initial={{ opacity: 0, x: 80 }}
         animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
           ></motion.div>

           <motion.img
            src={HeroImg}
       alt="Hero"
     className="w-full max-w-sm"
     animate={{ y: [0, -15, 0] }}
     transition={{
      duration:3,
      repeat: Infinity,
    repeatType: "loop",
     ease: "easeInOut",
  }}
  />
      

    </section>
    );
}