import React from 'react';
import BannerPng from "../../../assests/banner.png"; // Assurez-vous que le chemin est correct
import { motion } from 'framer-motion';

const Banner2 = () => {
  return (
    <section className='container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>
      <div className='flex justify-center items-center'>
        <motion.img 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          src={BannerPng} 
          alt="Banner" 
          className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
        />
      </div>
      
      <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
        <h1 className='text-4xl font-bold leading-snug'>JOIN OUR COMMUNITY TO START YOUR JOURNEY</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, nam? Repellendus illo sequi fugit laudantium nostrum veniam qui soluta sapiente dignissimos esse in ab atque, inventore saepe ducimus officia cum?</p>
        <a href='https://web.whatsapp.com/' className='primary-btn mt-8'>JOIN NOW</a>
      </div>
    </section>
  );
};

export default Banner2;
