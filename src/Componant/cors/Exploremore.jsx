import React, { useState } from 'react';
import { HomePageExplore } from "../../../Exploremore_data/homepage-explore";
import Highlightedtext from './Highlightedtext';
import Coursecard from './Coursecard';

function Exploremore() {
  const Tabname = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
  ];

  // State to manage the current tab and courses
  const [Currenttab, setCurrenttab] = useState(Tabname[0]);
  const [Courses, setCourses] = useState(HomePageExplore[0].courses);
  const [Currentcard, setCurrentcard] = useState(HomePageExplore[0].courses[0].heading);

  const setcard = (values) => {
    setCurrenttab(values);

    // Find the matching category
    const result = HomePageExplore.find(
      (cor) => cor.tag.toLowerCase() === values.toLowerCase()
    );
    // console.log(Courses)

    if (result) {
      setCourses(result.courses);
      setCurrentcard(result.courses.length > 0 ? result.courses[0].heading : "");
    } else {
      console.warn(`No courses found for category: ${values}`);
      setCourses([]); // Set empty array to prevent errors
      setCurrentcard(""); 
    }
  };

  return (
    <div className='flex flex-col relative  mb-5 h-[500px] justify-center items-center gap-3 mt-[10px]'>
      <div className='text-4xl font-semibold text-center'>
        Unlock the
        <Highlightedtext text={"Power of code"} />
      </div>
      <div>
        <p className='text-center text-lg text-[#838894] mt-3'>
          Learn To Build Anything You Can Think
        </p>
      </div>

      {/* Tab navigation */}
      <div className='flex flex-row rounded-full bg-[#161D29] w-fit py-3.5 px-3.5 justify-center mt-5 '>
        {Tabname.map((tabs, index) => (
          <div
            key={index}
            className={`mx-3 px-7 py-2 text-[16px] text-[#838894] font-bold 
              ${Currenttab === tabs ? "bg-[#112548] border-2 border-white text-[#F1F2FF] font-medium" : ""}
              rounded-full transition-all duration-300 cursor-pointer 
              hover:bg-[#000814] hover:border-2 border-white hover:text-[#F1F2FF]`}
            onClick={() => setcard(tabs)}
          >
            {tabs}
          </div>
        ))}
      </div>

      {/* Course list */}

      <div className=' flex gap-9 w-full justify-center mt-5  absolute top-[80%]'>
        {
          Courses.map((element, index) => {
            return (
              <Coursecard
                key={index}
                cardData={element}
                currentCard={Currentcard}
                setCurrentCard={setCurrentcard}
              />
            )
          })
        }
      </div>

    </div>
  );
}

export default Exploremore;
