import React, { useState } from 'react';
import Inputs from './Inputs';
import { service } from '../Appwrite/Intrconfig';
import envvariable from '../Appwrite/appwriteconfig';
import { toast } from 'react-toastify';
import Stepper from './Stepper';

const appwrite = new service()

const Addcourse = () => {
    const [showStepper, setShowStepper] = useState(true);
    const [currentStep, setCurrentStep] = useState(1); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            username: formData.get("username"),
            Tagname: formData.get("course_tagname"),
            curEmployment: formData.get("current_employment"),
            qualiProof: formData.get("qualification_proof"),
            workexp: formData.get("work_experience"),
            identityproof: formData.get("identity_proof"),
            passPort: formData.get("Passport_Image")
        }

        const uploadfile = async (data) => {
            try {
                const result = await appwrite.addcourse(data)
                console.log(result)
                if (result) {
                    toast.success("Your Details Added successfully")
                    e.target.reset()
                    setShowStepper(true)
                }
            } catch (error) {
                console.log(error)
            }
        }
        uploadfile(data)
    };

    return (
        
            <div className="flex w-full justify-center items-start gap-8 mt-10">
                    {showStepper && <Stepper currentStep={currentStep} />}
                <section className='w-[90%]'>
                    <form
                        className='bg-[#073B4C] w-full h-auto p-5 lg:grid grid-cols-2 gap-6 rounded-lg shadow-md'
                        onSubmit={handleSubmit}
                    >
                        {/* Left Column */}
                        <div className='flex flex-col gap-6'>
                            <Inputs label="Name" type="text" name="username" placeholder="Instructor name"
                                classname="outline-none px-4 py-2 text-lg w-full rounded-lg" />
                            <Inputs label="CourseTag Name" type="text" name="course_tagname" placeholder="Tag name"
                                classname="outline-none px-4 py-2 text-lg w-full rounded-lg" />
                            <Inputs label="Qualification Proof" type="file" name="qualification_proof"
                                classname="outline-none px-4 py-2 text-lg w-full rounded-lg" />
                        </div>

                        {/* Right Column */}
                        <div className='flex flex-col gap-6'>
                            <Inputs label="Work Experience" type="file" name="work_experience"
                                classname="outline-none px-4 py-2 text-lg w-full rounded-lg" />
                            <div className='flex flex-col mt-2'>
                                <label htmlFor="employment" className='text-[#ebc20e] text-xl mb-2'>Current Employment*</label>
                                <select id="employment" name="current_employment"
                                    className='px-4 py-2 w-[50%] text-lg rounded-lg out outline-2 font-bold'>
                                    <option value="tutor">Tutor</option>
                                    <option value="employee">Employee</option>
                                    <option value="freelancer">Freelancer</option>
                                    <option value="professor">Professor</option>
                                </select>
                            </div>
                            <Inputs label="Identity Proof" type="file" name="identity_proof"
                                classname="outline-none px-4 py-2 text-lg w-full rounded-lg" />
                        </div>

                        <Inputs label="Passport image" type="file" name="Passport_Image"
                            classname="outline-none px-4 py-2 text-lg w-full rounded-lg" />

                        <div className='flex justify-center items-center mt-5'>
                            <button
                                type="submit"
                                className='bg-[rgb(235,194,14)] h-[50px] w-auto text-2xl font-semibold rounded-lg px-3 hover:bg-[#B69507] hover:text-white hover:scale-105'>
                                Add details
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            
        
    );
}

export default Addcourse;
