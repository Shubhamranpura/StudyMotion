import React from 'react';
import HButton from '../cors/HButton';

function Aboutus() {
  return (
    <div className="bg-gray-900 text-white p-10">
      <div className="max-w-6xl mx-auto">
        {/* Founding Story */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-red-400">Our Founding Story</h1>
          <p className="mt-4 text-gray-300 text-2xl">
            Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
          </p>
          <p className="mt-2 text-gray-300 text-2xl">
            As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-orange-400">Our Vision</h1>
          <p className="mt-4 text-gray-300 text-2xl">
            With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h1 className="text-3xl font-bold text-blue-400">Our Mission</h1>
          <p className="mt-4 text-gray-300 text-2xl">
            Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
          </p>
        </div>
        <div className="my-12">
          <h1 className="text-4xl font-bold text-gray-300">
            World-Class Learning for <span className="text-blue-400">Anyone, Anywhere</span>
          </h1>
          <p className="text-gray-400 my-4 text-2xl font-semibold">
            Studynotion partners with more than 275+ leading universities and companies to bring flexible,
            affordable, job-relevant online learning to individuals and organizations worldwide.
          </p>
         
           <HButton Active={true} linkto={"/login"}>Learn More</HButton>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
