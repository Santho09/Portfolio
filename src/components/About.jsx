import React from 'react';
import '../App.css';
import { services } from '../../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Santhosh,Pre-final year Student in Sri Venkateshwara College Of Engineering passionate about developing web and mobile applications.As a<a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/santhosh-k-638419315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>Full Stack developer</a> I am doing my specialization in both MEAN and MERN stacks🚀.
              <br />
              I am passionate about data analysis, where I enjoy exploring datasets, uncovering insights, and visualizing trends. I have participated in several data analytics events, honing my skills in extracting meaningful information from complex data. In addition to data analysis, I have a deep interest in cricket and love sharing insights on the sport. I am keen on finding opportunities that allow me to combine my analytical skills with my passion for cricket.</p>

            <ButtonLink
              url='https://drive.google.com/drive/folders/1TC3vxoG1YxGca0gfvJ5pnPuBokGYr-tM'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;