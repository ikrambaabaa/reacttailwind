import React from 'react';
import BannerPng from "../../../assests/education.png"; // Assurez-vous que le chemin est correct
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { motion } from 'framer-motion'

const iconVariants = (delay) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

const Banner = () => {
  return (
    <section className='container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>
      <div className='flex justify-center items-center'>
        <motion.img 
          src={BannerPng} 
          alt='Education Banner' 
          className='w-[350px] md:max-w-[450px] object-cover drop-shadow'
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      <div className='flex flex-col justify-center space-y-4'>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold leading-snug'
        >
          The World Leading Online Learning Platform
        </motion.h1>
        <motion.div 
          className='flex items-center gap-4 p-6 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'
          variants={iconVariants(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <GrUserExpert className='text-3xl mr-4' />
          <span className='text-lg'>Expert Instructors</span>
        </motion.div>
        <motion.div 
          className='flex items-center gap-4 p-6 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'
          variants={iconVariants(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <MdOutlineAccessTime className='text-3xl mr-4' />
          <span className='text-lg'>Flexible Schedule</span>
        </motion.div>
        <motion.div 
          className='flex items-center gap-4 p-6 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'
          variants={iconVariants(0.6)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <FaBookReader className='text-3xl mr-4' />
          <span className='text-lg'>Comprehensive Resources</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
