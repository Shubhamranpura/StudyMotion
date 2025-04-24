import React from 'react'

function Inputs({ label, type, classname, placeholder, name }) {
  return (
    <div className='flex flex-col mt-2  gap-2'>
      <label htmlFor={name} className='text-2xl text-[rgb(235,194,14)]'>{label}*</label>
      <input type={type}
        className={`${classname} h-10 bg-gray-500 text-white`}
        placeholder={placeholder}
        name={name} />
    </div>
  )
}

export default Inputs
