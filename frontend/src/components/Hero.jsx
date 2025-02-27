import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const Hero = ({
  title = 'Creative developer & Designer',
  subtitle = 'I craft beautiful and functional web experiences that bring ideas to life.',
}) => {
  return (
    <>
      <section className="bg-[#FFFFFF] flex items-center justify-center h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold max-w-3xl text-[#3A404F] sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="my-4 text-xl text-black opacity-70">{subtitle}</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/projects"
              className="flex items-center gap-2 bg-[#0F1729] text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              <span>View Projects</span> <FaArrowRight />
            </Link>
            <Link
              to="/showcase"
              className="border rounded-lg px-4 py-2 hover:bg-gray-200"
            >
              Showcase Work
            </Link>
          </div>
        </div>
      </section>
      <hr className="border border-gray-300 w-screen" />
    </>
  );
};

export default Hero;
