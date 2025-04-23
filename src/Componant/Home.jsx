import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import HighlightedText from './cors/Highlightedtext' 
import Highlightedtext from './cors/Highlightedtext'
import HButton from './cors/HButton'
import Banner from '../assets/Images/banner.mp4'
import Codeblocks from './cors/Codeblocks'
import TimelineSec from './cors/TimelineSec'
import LearningpartSec from './cors/LearningpartSec'
import Instructorsec from './cors/Instructorsec'
import Exploremore from './cors/Exploremore'

function Home() {
  return (
    <div className='mx-auto relative flex flex-col items-center justify-center text-white max-w-[1460px] px-4 sm:px-6 lg:px-8'>
      

      {/* Main Heading */}
      <div className="flex justify-center text-center w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-7">
          Empower Your Future With <Highlightedtext text={"Coding Skills"} />
        </h1>
      </div>

      {/* Subheading */}
      <div className='w-full md:w-[90%] text-center mt-3 text-base sm:text-lg font-bold text-[#45809a]'>
        Our online coding courses allow you to learn at your own speed, from any location globally, while providing access to a wide range of resources. These include hands-on projects personalized feedback from experienced instructors to support your learning journey.
      </div>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 mt-8'>
        <HButton Active={true} linkto={"/signup"}>
          Learn More
        </HButton>
        <HButton Active={false} linkto={"/login"}>Book a Demo</HButton>
      </div>

      {/* Banner Video */}
      <div className='my-15 py-9 w-full md:w-[90%] shadow-[-4px_4px_88px_33px_#667ae1]'>
        <video
          muted
          loop
          autoPlay
          className='w-full shadow-[21px_45px_-1px_rgba(199,193,199,0.83)]'
        >
          <source src={Banner} type="video/mp4" />
        </video>
      </div>

      {/* Code Block 1 */}
      <div className='w-full'>
        <Codeblocks
          position={"lg:flex-row"}
          heading={
            <div className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
              Unlock Your
              <HighlightedText text={"Coding Potential"} />
              with our online Course
            </div>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          bbutton1={
            {
              text: "Try it yourself",
              linkto: "/signup",
              active: true,
            }
          }
          bbutton2={
            {
              text: "learn more",
              linkto: "/login",
              active: false,
            }
          }
          codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
          codecolor={"text-green-700"}
          backgroundgradient={"grad"}
        />
      </div>

      {/* Code Block 2 */}
      <div className='w-full mt-10'>
        <Codeblocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
              Start
              <HighlightedText text={"Coding in Second"} />
            </div>
          }
          subheading={
            "Try it out! Our immersive learning experience ensures you'll be writing real code right from the start."
          }
          bbutton1={
            {
              text: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }
          }
          bbutton2={
            {
              text: "learn more",
              linkto: "/login",
              active: false,
            }
          }
          codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
          codecolor={"text-green-700"}
          backgroundgradient={"grad"}
          animationsecond={2000}
        />
        <Exploremore/>
      </div>

      {/* Section 3 */}
      <div className='bg-[#F9F9F9] w-full text-[#585D69] mt-15'>
        <div className="homepage_bg h-auto flex-col w-full">
          <div className='h-[100px] sm:h-[150px] md:h-[200px]'></div>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 justify-center text-white px-4'>
            <HButton Active={true} linkto={"/signup"}>
              <div className='flex items-center gap-3'>
                Explore Catalog
                <FaArrowRight />
              </div>
            </HButton>
            <HButton Active={false} linkto={"/signup"}>
              <div>Learn More</div>
            </HButton>
          </div>
          <div className='mx-auto w-11/12 flex flex-col justify-between items-center gap-7 py-8'>
            <div className='flex flex-col lg:flex-row gap-5 mb-5 mt-[50px] md:mt-[90px]'>
              <div className='text-2xl sm:text-3xl md:text-4xl font-semibold lg:w-[45%]'>
                Get the Skills you need for a
                <HighlightedText text="Job that is in demand" />
              </div>

              <div className='flex flex-col gap-6 sm:gap-10 lg:w-[40%] items-start'>
                <div className='text-base sm:text-[20px]'>
                  The modern StudyMotion dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                </div>
                <HButton Active={true} linkto={"/signup"}>
                  <div>Learn more</div>
                </HButton>
              </div>
            </div>
            <TimelineSec />
            <LearningpartSec/>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className='w-full flex-col items-center justify-between bg-[#000814] text-white'>
         <Instructorsec/>
      </div>
    </div>
  )
}

export default Home;