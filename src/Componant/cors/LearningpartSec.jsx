import React from 'react';
import Highlightedtext from './Highlightedtext';
import Konwyourprogress from '../../assets/Images/Know_your_progress.svg'
import comparewithother from '../../assets/Images/Compare_with_others.svg'
import Planyourlessons from '../../assets/Images/Plan_your_lessons.svg'
import HButton from './HButton';
// import HighlightText from /
const LearningpartSec = () => {
    return (
        <div className='mt-[130px]'>
            <div className='flex flex-col gap-5 items-center'>
                <div className='text-4xl font-semibold text-center'>
                    Your Swiss knife for
                    <Highlightedtext text={' learning any language'} />
                </div>
                <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
                    Using spin making learning multiple languages easy, with 20+ languages realistic voice-over,
                    progress tracking, custom schedule and more.
                </div>
                <div className='flex flex-row items-center justify-center mt-5 ml-10'>
                    <img src={Konwyourprogress} alt="Description of image"
                        className='object-cover -mr-32 ' />
                    <img src={comparewithother} alt="Description of image" />
                    <img src={Planyourlessons} alt="Description of image"
                        className='object-cover -ml-36' />
                </div>
                <div className='mb-6'>
                    <HButton Active={true} linkto={"/signup"}>
                        Learn More
                    </HButton>
                </div>
            </div>
        </div>
    );
};

export default LearningpartSec;