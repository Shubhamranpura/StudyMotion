import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Animations from "./animations";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Authentication";
import { toast } from "react-toastify";
import { setAuthState } from "../../slice/authslice";
import { adduser } from "../../slice/profileslice";
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCon, setShowPasswordCon] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const user = await registerUser(formData, dispatch);

      if (user?.token) {
        dispatch(setAuthState(user.token)); // store token in redux
        dispatch(adduser(formData)); // store user in redux + localStorage
        toast.success("Signup successful! Redirecting...");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message || "Signup failed");
    }
  };
  return (
    <div className="w-[100vw] min-h-screen bg-gray-900 flex items-center justify-center md:flex-row-reverse p-4">
      <form onSubmit={handleSubmit} className="bg-gray-800 h-auto w-full max-w-[100rem] text-white p-6 md:p-8 rounded-xl flex flex-col md:flex-row">

        {/* Left Section - Form */}
        <div className="md:w-1/2 w-full mt-6 md:mt-10 px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Join the millions learning new skills with <br />
            <span className="text-blue-400">StudyMotion</span>
          </h2>
          <p className="text-gray-400 mt-2 text-lg md:text-2xl">
            Build skills for today, tomorrow, and beyond.{" "}
            <span className="text-green-400 text-xl md:text-3xl font-semibold">
              Education to future-proof your career.
            </span>
          </p>

          {/* Role Selection */}
          <div className="mt-4 flex gap-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-lg text-lg md:text-3xl ${formData.role === "student" ? "bg-blue-500" : "bg-gray-700"
                }`}
              onClick={() => handleRoleChange("student")}
            >
              Student
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-lg text-lg md:text-3xl ${formData.role === "instructor" ? "bg-blue-500" : "bg-gray-700"
                }`}
              onClick={() => handleRoleChange("instructor")}
            >
              Instructor
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 text-lg md:text-3xl flex flex-col gap-3 mt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full p-2 bg-gray-700 rounded"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full p-2 bg-gray-700 rounded"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-2 bg-gray-700 rounded"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                autoComplete="phone"
                placeholder="Phone Number"
                className="w-full p-2 bg-gray-700 rounded"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative w-full md:w-1/2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  className="w-full p-2 bg-gray-700 rounded"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="absolute cursor-pointer right-2 top-3 text-white"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                </span>
                {errors.password && <p className="text-red-500 text-sm md:text-lg">{errors.password}</p>}
              </div>

              <div className="relative w-full md:w-1/2">
                <input
                  type={showPasswordCon ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  autoComplete="confirm-password"
                  className="w-full p-2 bg-gray-700 rounded"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <span
                  className="absolute right-2 top-3 text-white cursor-pointer"
                  onClick={() => setShowPasswordCon((prev) => !prev)}
                >
                  {showPasswordCon ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                </span>
                {errors.confirmPassword && <p className="text-red-500 text-sm md:text-lg">{errors.confirmPassword}</p>}
              </div>
            </div>
          </div>
          
          {/* Submit Button - Moved inside the form container */}
          <button type="submit" className="w-full text-lg md:text-[25px] bg-[#FFD60A] text-black py-2 rounded-lg font-bold mt-6 cursor-pointer">
            Create Account
          </button>
        </div>

        {/* Right Section - Animation */}
        <div className="md:w-1/2 w-full flex justify-center items-center mt-6 md:mt-0">
          <Animations />
        </div>
      </form>
    </div>
  );
}

export default Signup;