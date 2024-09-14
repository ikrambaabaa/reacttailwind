import { TbWorldWww } from 'react-icons/tb';
import { RiComputerLine } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import { RiSearchEyeLine } from 'react-icons/ri';
import { motion } from 'framer-motion'
const servicedata = [
  { id: 1, title: "Web Development", link: "#", icon: <TbWorldWww />, delay: 0.2 },
  { id: 3, title: "Software Development", link: "#", icon: <RiComputerLine />, delay: 0.4 },
  { id: 4, title: "Satisfied Clients", link: "#", icon: <IoIosPeople />, delay: 0.4 },
  { id: 5, title: "SEO Optimization", link: "#", icon: <RiSearchEyeLine />, delay: 0.6 },
  { id: 6, title: "24/7 Support", link: "#", icon: <RiSearchEyeLine />, delay: 0.6 }
];

const slideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut", // Use string for ease
      }
    }
  }
}

const Services = () => {
  return (
    <section className='bg-white'>
      <div className='container mx-auto pb-14 pt-16'>
        <h1 className='text-4xl font-bold text-left pb-10'>Services We Provide</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicedata.map((service) => (
            <motion.div 
              key={service.id} 
              className="service-card  bg-slate-200  rounded-2xl flex-col gap-4 items-center hover:scale-110 duration-300 hover:shadow-2xl p-4"
              variants={slideLeft(service.delay)}
              initial="initial"
              animate="animate"
            >
              <div className="icon text-4xl">{service.icon}</div>
              <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
              <a href={service.link} className="text-blue-500 mt-2 inline-block">Learn More</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
