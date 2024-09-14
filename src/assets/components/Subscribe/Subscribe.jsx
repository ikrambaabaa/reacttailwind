import React from 'react';
import { FaBell } from "react-icons/fa";
import BgImage from "../../../assests/bg.png";
import { motion } from 'framer-motion'

const bgStyle = {
  backgroundImage: `url(${BgImage})`, 
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className='bg-slate-300'>
      <div style={bgStyle} className='container py-24 md:py-28'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='flex flex-col justify-center'
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className='text-center space-y-4 lg:max-w-[430px] mx-auto'
          >
            <h1 className='text-4xl font-bold leading-snug'>
              450K+ Students are learning from us
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, odio. Consequatur aliquid facere assumenda pariatur quidem temporibus illo hic possimus quisquam distinctio, quo nesciunt placeat! Mollitia incidunt sunt aperiam nam.</p>
          </motion.div>
          <div className='mt-8 flex flex-col md:flex-row justify-center items-center gap-4'>
            <input
              type='email'
              placeholder='Enter your email'
              className='px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button className='px-6 py-2 bg-yellow-300 text-white rounded-md flex items-center gap-2 hover:bg-blue-600 transition'>
              <FaBell className='group-hover:animate-bounce group-hover:text-lg duration-200' />
              Subscribe Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscribe;
