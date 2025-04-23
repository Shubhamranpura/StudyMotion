import React from 'react';
import HButton from './HButton';
import { FaArrowRight } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';

function Codeblocks({
  position, heading, subheading, bbutton1, bbutton2, codecolor, codeblock, animationsecond
}) {
  return (
    <div className={`flex ${position} my-6 items-center justify-center mx-[35px] gap-18`}>
      
      {/* Left Section: Heading & Buttons */}
      <div className="w-[100%] max-w-[50%] flex flex-col gap-6">
        <div className="text-3xl font-extrabold text-white">
          {heading}
        </div>

        <div className="text-lg font-bold text-gray-300">
          {subheading}
        </div>

        <div className="flex gap-5 mt-5">
          <HButton Active={bbutton1.active} linkto={bbutton1.linkto}>
            <div className="flex gap-3 items-center">
              {bbutton1.text}
              <FaArrowRight />
            </div>
          </HButton>
          <HButton Active={bbutton2.active} linkto={bbutton2.linkto}>
            {bbutton2.text}
          </HButton>
        </div>
      </div>

      {/* Right Section: Code Block with Animation */}
      <div className="relative flex flex-row text-[18px] gap-4 min-h-[300px] min-w-[50%]
      bg-gradient-to-t from-[#152627] to-[#96A3A3] shadow-lg shadow-cyan-400 border-4 border-cyan-300
      rounded-lg p-4 overflow-hidden">

        {/* Line Numbers (Fixed Width) */}
        <div className="text-center flex flex-col w-[10%] min-w-[40px] font-bold text-cyan-300">
          <ul className="space-y-1">
            {Array.from({ length: 12 }, (_, i) => (
              <li className='mt-1' key={i}>{i + 1}</li>
            ))}
          </ul>
        </div>

        {/* Animated Code Block (Fixed Width & Overflow Handling) */}
        <div className={`w-[45%] min-w-[350px] flex flex-col gap-2 font-bold font-mono text-white ${codecolor} pr-4
        overflow-hidden overflow-x-auto whitespace-pre-wrap text-[21px]`}>
          <TypeAnimation
            sequence={[codeblock, animationsecond, ""]}
            repeat={Infinity}
            omitDeletionAnimation
            cursor
            style={{
              whiteSpace: "pre-line",
              overflowX: "hidden", 
            
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default Codeblocks;
