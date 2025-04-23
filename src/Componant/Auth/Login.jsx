import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import googleimg from "../../assets/animations/googleimg.png";
import Animationssignup from "./Animationsignup";
import { loginUser, signInWithGoogle } from "../../Authentication";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { app } from "../../Authentication";
import { adduser } from "../../slice/profileslice";

const db = getFirestore(app);
const auth = getAuth(app);

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await loginUser(email, password);
      console.log(userCredential.uid)
      // Fetch user data from Firestore
      const uid = userCredential.uid;
      const docRef = doc(db, "user", uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data())

      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log(userData)
        dispatch(adduser(userData)); 
        console.log("User data saved to Redux:", userData);
      } else {
        console.warn("User document does not exist in Firestore.");
      }

      toast.success("🎉 Login successful!", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.message, { position: "top-right" });
    }
  };


  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const userCredential = await signInWithGoogle();

      const uid = userCredential.user.uid;
      const docRef = doc(db, "user", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        dispatch(adduser(userData));
        console.log("Google user data stored in Redux:", userData);
      }

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-900 text-white px-6 md:px-12">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 md:px-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome Back</h1>
        <p className="text-gray-400 mb-6 text-lg md:text-xl">
          Build skills for today, tomorrow, and beyond.{" "}
          <span className="text-blue-400 font-semibold">Education to future-proof your career.</span>
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          {/* Email Input */}
          <label className="block mb-2 text-lg font-medium">Email Address *</label>
          <input
            type="email"
            autoComplete="username"
            placeholder="Enter Email"
            className="w-full p-3 mb-4 bg-gray-800 border border-gray-700 rounded text-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Input */}
          <label className="block mb-2 text-lg font-medium">Password *</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-lg"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} /> : <AiOutlineEye fontSize={24} />}
            </span>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#FFD60A] text-black font-bold py-3 mt-6 rounded hover:scale-95 transition-all duration-200 text-lg"
            disabled={loading}
          >
            {loading ? "..." : "Sign in"}
          </button>

          {/* Forgot Password */}


          {/* OR Divider */}
          <div className="my-4 text-gray-400 text-center">OR</div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-[#FFD60A] text-black font-bold py-3 flex items-center justify-center gap-2 rounded hover:scale-95 transition-all duration-200 text-lg"
            disabled={loading}
          >
            <img src={googleimg} alt="google" className="w-7" />
            {loading ? "Signing in..." : "Sign in with Google"}
          </button>
        </form>
      </div>

      {/* Right Side - Animation (Hidden on Small Screens) */}
      <div className=" sm:flex-col lg:flex w-1/2 min-h-screen justify-center items-center">
        <Animationssignup />
      </div>
    </div>
  );
};

export default Login;
