import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import Home from './Componant/Home';
import Navbar from './Componant/CommonComp/Navbar';
import Login from './Componant/Auth/Login';
import Signup from './Componant/Auth/Signup';
import Emailcheak from './Componant/Auth/Emailcheak';
import Dashboard from './Dashboard/Dashboard';
import { initializeAuth } from './slice/authslice';
import PrivateRoute from './Componant/CommonComp/privateRoute';
import './App.css';
import './index.css';
import Catalog from './catalog/catalog';
import CourseDetails from './CourseDetail/CourseDetails';
import Cart from './CourseDetail/Cart';
import Aboutus from './Componant/CommonComp/Aboutus';
import ContactUs from './Componant/CommonComp/Contact';
import Addcourse from './instructorpart/Addcourse';
import Instructorlinks from './Componant/CommonComp/instructorlinks';
import Studentroutes from "./Componant/CommonComp/Studentroutes"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Add error handling for the auth initialization
    try {
      dispatch(initializeAuth());
    } catch (error) {
      console.error("Failed to initialize auth:", error);
    }
  }, [dispatch]);

  return (
    <>
      <div className='min-h-screen max-w-screen bg-[#141414] flex flex-col font-inter'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/email-verification" element={<Emailcheak />} />
          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
            // <Dashboard/>
          } />
          <Route path='/catalog' element={
            <PrivateRoute>
              <Studentroutes>
              <Catalog />
              </Studentroutes>
            </PrivateRoute>
          } />
          {/* <Route path="/course/:courseTitle/:instructor" element={<CourseDetails/>} /> */}
          <Route path="/course/:title/:instructor" element={<CourseDetails />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<Aboutus/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/add-course" element={
            <Instructorlinks>  <Addcourse/></Instructorlinks>
          } />


        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;