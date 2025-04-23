import React from 'react';
import HButton from '../cors/HButton';

function ContactUs() {
  return (
    <div className="p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Got an Idea? We've got the skills. Let's team up</h2>
      <p className="text-center text-gray-400 text-3xl mb-8">Tell us more about yourself and what you have in mind.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Chat with us</h3>
          <p className="text-gray-400 text-xl">Our friendly team is here to help.</p>
          
          <h3 className="text-2xl font-semibold mt-6 mb-4">Visit us</h3>
          <p className="text-gray-400 text-xl">Come and say hello at our office HQ. Here is the location/address.</p>
          
          <h3 className=" font-semibold mt-6 mb-4 text-2xl">Call us</h3>
          <p className="text-gray-400 text-xl">Mon - Fri From 8am to 5pm. +123 456 7890</p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <form>
            <div className="grid text-2xl grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full p-3 rounded bg-gray-700 text-white" />
              <input type="text" placeholder="Last Name" className="w-full p-3 rounded bg-gray-700 text-white" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full text-2xl p-3 mt-4 rounded bg-gray-700 text-white" />
            <div className="grid grid-cols-5 gap-4 mt-4">
              <select className="col-span-1 p-3 rounded bg-gray-700 text-white text-2xl">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input type="tel" placeholder="Phone Number" className="col-span-4 p-3 text-2xl rounded bg-gray-700 text-white" />
            </div>
            <textarea placeholder="Enter message" className="w-full p-3 mt-4 rounded bg-gray-700 text-white h-32 text-2xl"></textarea>
            <HButton Active={true} linkto={"/"}>Send message</HButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
