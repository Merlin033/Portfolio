import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"

const SectionCTA = () => {
  return (
    <section className='text-off-white bg-bg-black bg-center bg-cover bg-fixed bg-gray-global brightness-[1.5] px-4 py-8 md:p-10 lg:p-20 mt-20 md:mt-24 lg:mt-[120px] mb-5 flex flex-col justify-center items-center gap-6 lg:gap-9 '>
      <motion.p
        className='text-center text-lg md:text-2xl lg:text-[1.7rem] blur-[0.5px] leading-8 md:leading-10 tracking-wider'
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >Vous avez un projet ? Je serai ravi d'en<span className='text-pink-global'> discuter avec vous</span> </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        
      </motion.div>

    </section>
  );
};

export default SectionCTA;