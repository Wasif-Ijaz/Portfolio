import Card from './Card';
import { FaLocationArrow } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const HomeCards = ({ isTrue = false }) => {
  return (
    <section className="min-h-[60vh] my-10 flex overflow-hidden">
      <div className="container-xl lg:container m-auto">
        <h1 className="text-center text-gray-800 text-4xl font-bold">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">E-commerce Platform</h2>
            <p className="mt-2 mb-4">
              A modern e-commerce platform built with React and Node.js
            </p>
            <div className="space-x-2">
              <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                React
              </button>
              <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                Node.js
              </button>
              <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                MongoDb
              </button>
            </div>
            <div className="flex space-x-2 mt-3">
              <button className="flex items-center gap-2 border rounded-lg px-4 py-2">
                <FaGithub /> <span>GitHub</span>
              </button>
              <button className="flex items-center gap-2 bg-black text-white rounded-lg px-4 py-2">
                <FaLocationArrow /> <span>Live Demo</span>
              </button>
            </div>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">Task Management App</h2>
            <p className="mt-2 mb-4">
              A collaborative task management application
            </p>
            <div className="space-x-2">
              <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                Next.js
              </button>
              <button className="inline-block bg-gray-300  rounded-lg px-4 py-2">
                TypeScript
              </button>
              <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                Express
              </button>
            </div>
            <div className="flex space-x-2 mt-3">
              <button className="flex items-center gap-2 border rounded-lg px-4 py-2">
                <FaGithub /> <span>GitHub</span>
              </button>
              <button className="flex items-center gap-2 bg-black text-white rounded-lg px-4 py-2">
                <FaLocationArrow /> <span>Live Demo</span>
              </button>
            </div>
          </Card>
          {isTrue ? (
            <>
              <Card>
                <h2 className="text-2xl font-bold">Social Media Dashboard</h2>
                <p className="mt-2 mb-4">
                  A modern e-commerce platform built with React and Node.js
                </p>
                <div className="space-x-2">
                  <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                    React
                  </button>
                  <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                    Node.js
                  </button>
                  <button className="inline-block bg-gray-300 rounded-lg px-4 py-2">
                    MongoDb
                  </button>
                </div>
                <div className="flex space-x-2 mt-3">
                  <button className="flex items-center gap-2 border rounded-lg px-4 py-2">
                    <FaGithub /> <span>GitHub</span>
                  </button>
                  <button className="flex items-center gap-2 bg-black text-white rounded-lg px-4 py-2">
                    <FaLocationArrow /> <span>Live Demo</span>
                  </button>
                </div>
              </Card>
              <Card bg="bg-indigo-100">
                <h2 className="text-2xl font-bold">Portfolio Website</h2>
                <p className="mt-2 mb-4">
                  A collaborative task management application
                </p>
                <div className="space-x-2">
                  <button className="inline-block bg-gray-300 rounded-lg px-4 py-2 ">
                    Next.js
                  </button>
                  <button className="inline-block bg-gray-300 rounded-lg px-4 py-2 ">
                    TypeScript
                  </button>
                  <button className="inline-block bg-gray-300 rounded-lg px-4 py-2 ">
                    Express
                  </button>
                </div>
                <div className="flex space-x-2 mt-3">
                  <button className="flex items-center gap-2 border rounded-lg px-4 py-2">
                    <FaGithub /> <span>GitHub</span>
                  </button>
                  <button className="flex items-center gap-2 bg-black text-white rounded-lg px-4 py-2">
                    <FaLocationArrow /> <span>Live Demo</span>
                  </button>
                </div>
              </Card>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
