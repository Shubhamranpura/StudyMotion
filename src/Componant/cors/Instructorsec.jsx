import React from 'react'
import Instructor from "../../assets/Images/Instructor.png"
import Highlightedtext from './Highlightedtext'
import HButton from './HButton'
import { FaArrowRight } from 'react-icons/fa'


const Instructorsec = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-row gap-20 items-center">

        <div className="w-[50%] mx-5">
          <img
            src={Instructor}
            alt=""
            className="shadow-white"
          />
        </div>

        <div className="w-[50%] flex flex-col gap-10">
          <div className="text-4xl font-semibold">

            Become an
            <div><Highlightedtext text={"Instructor"} /></div>

          </div>

          <p className="font-medium text-[16px] w-[90%] text-[#838894]">
            Instructors from around the world teach millions of students on StudyMotion.
            We provide the tools and skills to teach what you love.
          </p>
          <div>

            <HButton Active={true} linkto={"/signup"}>
              <div className='flex items-center justify-center gap-5'>
                Start Teaching Today
                <FaArrowRight />
              </div>
            </HButton>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Instructorsec
