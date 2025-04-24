import React from 'react';

const steps = [
    "Instructor Details Added",
    "Qualification Proof Uploaded",
    "Work Experience Submitted",
    "Course Ready"
];

const Stepper = ({ currentStep }) => {
    return (
        <div className=" flex-col items-center gap-4 mt-[250px]">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col  items-center">
                    <div
                        className={`
                            w-10 h-10 rounded-full flex items-center justify-center 
                            text-white font-bold transition-all duration-300 
                            ${currentStep > index ? 'bg-[#4ab13a]' : 'bg-gray-300'}
                        `}
                    >
                        {index + 1}
                    </div>
                    {index !== steps.length - 1 && (
                        <div className="w-1 h-[450px] bg-gray-400"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Stepper;
