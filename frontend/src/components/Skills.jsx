import Card from './Card';
import { RiComputerFill } from 'react-icons/ri';
import { IoMdSettings } from 'react-icons/io';
import { FaTools } from 'react-icons/fa';

const Skills = () => {
  return (
    <>
      <section className="min-h-[85vh] my-10 flex items-center justify-center overflow-hidden">
        <div className="container-xl lg:container m-auto">
          <h1 className="text-center text-gray-800 text-4xl font-bold">
            Skills & Expertise
          </h1>
          <p className="text-center text-gray-600 mt-1">
            A comprehensive toolkit for building modern web applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  <RiComputerFill />
                </span>
                <h2 className="text-2xl font-bold">Frontend</h2>
              </div>
              <p className="mt-2 mb-4">
              Ensuring a dynamic and responsive user experience
              </p>
              <div className="space-x-2">
                <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                  React
                </button>
                <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                  Tailwind CSS
                </button>
                <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                  Redux Toolkit
                </button>
              </div>
            </Card>
            <Card>
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  <IoMdSettings />
                </span>
                <h2 className="text-2xl font-bold">Backend</h2>
              </div>
              <p className="mt-2 mb-4">
              Scalable server-side architecture
              </p>
              <div className="space-x-2">
                <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                  Express
                </button>
                <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                  Node.js
                </button>
                <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                  MongoDb
                </button>
              </div>
            </Card>
            <Card>
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  <FaTools />
                </span>
                <h2 className="text-2xl font-bold">Tools</h2>
              </div>
              <p className="mt-2 mb-4">
              A set of essential tools is used to enhance development
              </p>
              <div className="space-x-2">
                <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                  Git & GitHub
                </button>
                <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                  VS Code
                </button>
                <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                  Postman
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <hr className="border border-gray-300 w-screen" />
    </>
  );
};

export default Skills;
