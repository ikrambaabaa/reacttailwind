import React from 'react';
import Navbar from '../navbar/navbar'; // Ensure the correct path and capitalization
import { IoIosArrowRoundForward } from 'react-icons/io';
import hero from '../../../assests/hero.png'; // Ensure the correct path
import { motion } from 'framer-motion'
export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: 'easeInOut',
      },
    },
  };
};

const Hero = () => {
  return (
    <section>
      <div className="bg-gray-100 overflow-hidden relative">
        <Navbar />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px] items-center py-10">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="text-center md:text-left space-y-10 lg:max-w-[400px] md:mr-8">
              <motion.h1 initial="initial" animate="animate" variants={FadeUp(0.6)} className="text-3xl lg:text-5xl font-bold leading-snug">
                LET'S LEARN TO BUILD A <span className="text-slate-400">WEBSITE</span> for Your Business
              </motion.h1>
              <motion.div initial="initial" animate="animate" variants={FadeUp(0.8)} className="flex justify-center md:justify-start">
                <button className="primary-btn flex items-center gap-2 mt-4">
                  GET STARTED
                  <IoIosArrowRoundForward className="text-xl ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </motion.div>
            </div>
          </div>
          <div className="relative flex justify-center items-center mt-10 md:mt-0">
            <motion.img 
              initial={{ x: 50, opacity: 0 }} 
              animate={{ x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.4, ease: "easeInOut" } }} 
              src={hero} 
              alt="Hero" 
              className="w-full h-auto max-w-lg object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
