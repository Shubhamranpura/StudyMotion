import React, { useState, useRef } from "react";

const Emailcheak = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="w-[50%] h-[500px] max-w-[80%] bg-gray-800  text-3xl p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold mb-2 ">Verify Email</h2>
        <p className="text-2xl text-gray-400 mb-4">
          A verification code has been sent to you. Enter the code below.
        </p>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-2 mb-4 mt-15 ">
          {code.map((num, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={num}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-25 h-25 text-center text-3xl bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-yellow-500"
              maxLength="1"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button className="w-[50%] bg-yellow-500 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">
          Verify Email
        </button>

        {/* Navigation Links */}
        <div className="flex justify-center gap-50 text-3xl  mt-10  text-gray-400">
          <button className="hover:underline">Back to Signup</button>
          <button className="hover:underline">Resend It</button>
        </div>
      </div>
    </div>
  );
};

export default Emailcheak;
