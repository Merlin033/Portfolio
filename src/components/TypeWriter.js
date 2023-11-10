import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeWriter = () => {
  return (
    <h2  className='text-[42px] md:text-5xl lg:text-6xl font-medium h-20 lg:h-[5.7rem]'>
      <TypeAnimation
        sequence={[
          "Développeur",
          1500,
          "Passionné",
          1500,
          "Créatif",
          1500,
        ]}
        speed={30}
        repeat={Infinity}
        cursor={false}       
      />
    </h2>
  );
};

export default TypeWriter;