import { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../Authentication";
import { AiOutlineHome, AiOutlineBook, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthState } from "../slice/authslice";
import { removeUser } from "../slice/profileslice";

export const db = getFirestore(app);
const auth = getAuth(app);

const data = [
  { name: "Mon", learning: 10, tests: 5 },
  { name: "Tue", learning: 15, tests: 8 },
  { name: "Wed", learning: 20, tests: 10 },
  { name: "Thu", learning: 18, tests: 12 },
  { name: "Fri", learning: 25, tests: 15 },
  { name: "Sat", learning: 22, tests: 13 },
  { name: "Sun", learning: 30, tests: 18 },
];

const courseProgress = [
  { name: "Lesson 01", progress: 35, color: "bg-blue-400" },
  { name: "Lesson 02", progress: 16, color: "bg-yellow-400" },
  { name: "Lesson 03", progress: 32, color: "bg-pink-500" },
  { name: "Lesson 04", progress: 54, color: "bg-white" },
  { name: "Lesson 05", progress: 75, color: "bg-yellow-500" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("User");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const mycourse = useSelector((state) => state.cart.cart);

  // Create a reference for the "Your Courses" section
  const myCoursesRef = useRef(null);

  // Function to scroll to the "Your Courses" section
  const scrollToCourses = () => {
    if (myCoursesRef.current) {
      myCoursesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const getUser = async (uid) => {
      try {
        console.log("Fetching user with UID:", uid);
        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);
        console.log(userSnap)

        if (userSnap.exists()) {
          console.log("User data found:", userSnap.data());
          setUsername(userSnap.data());
        } else {
          console.log("No user data found in Firestore");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user.uid);
        getUser(user.uid);
      } else {
        console.log("No user logged in");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    dispatch(clearAuthState());
    // dispatch(removeUser())
    // localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between p-4 bg-gray-800">
        <h2 className="text-2xl font-bold text-[#b7d8e3]">StudyMotion</h2>
        <AiOutlineMenu
          className="text-3xl cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      {/* Sidebar */}
      <div className={`fixed md:relative z-10 w-64 bg-gray-800 min-h-screen p-5 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <h2 className="text-4xl text-[#b7d8e3] font-bold mb-6">StudyMotion</h2>
        <ul className="space-y-10">
          <li className="flex items-center gap-3 text-2xl cursor-pointer hover:text-yellow-400">
            <AiOutlineHome /> Dashboard
          </li>
          <li 
            onClick={scrollToCourses}  // Scroll to My Courses section
            className="flex items-center gap-3 text-2xl cursor-pointer hover:text-yellow-400">
            <AiOutlineBook /> My Courses
          </li>
          <li onClick={handleLogout} className="flex items-center gap-3 text-2xl cursor-pointer hover:text-red-500 mt-auto">
            <AiOutlineLogout /> Log Out
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl sm:text-5xl font-bold">Hii {username.firstName || "Shubham"} 👋</h1>
        <p className="text-gray-400 text-lg">Let's start something new</p>

        {/* Productivity Section */}
        <div className="bg-gray-800 p-5 rounded-lg mt-6">
          <h2 className="text-2xl sm:text-4xl font-semibold mb-4">Productivity</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="learning" fill="#38bdf8" barSize={30} />
              <Bar dataKey="tests" fill="#facc15" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Course Progress Section */}
        <div className="bg-gray-800 p-5 rounded-lg mt-6">
          <h2 className="text-2xl sm:text-4xl font-semibold mb-4">Course Progress</h2>
          {courseProgress.map((course, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between text-lg text-gray-300">
                <span>{course.name}</span>
                <span>{course.progress}/100</span>
              </div>
              <div className="w-full bg-gray-700 rounded-lg h-3 mt-1">
                <div className={`${course.color} h-3 rounded-lg`} style={{ width: `${course.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Your Courses Section */}
        <h2 ref={myCoursesRef} className="text-2xl mt-5 sm:text-4xl font-semibold mb-4">Your Courses</h2>
        {mycourse && (
          <div className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mycourse.map((item, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <img src={item.Cardimg} alt={item.title} className="rounded-lg w-full h-[70%]" />
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-2xl"> by {item.instructor}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
