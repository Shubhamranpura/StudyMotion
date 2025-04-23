import { useNavigate, useParams } from "react-router-dom";
import courseData from "../catalog/courseimages";
import { Card, CardContent, CardHeader, CardImage, CardTitle } from "../catalog/ui/card";
import { RatingStars } from "../catalog/RatingStars";
import { FaArrowRight } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addTocart } from "../slice/cartSlice";
import { toast } from "react-toastify";

export default function CourseDetails() {
  const { title, instructor } = useParams();
  const dispatch = useDispatch()

  const decodedTitle = decodeURIComponent(title);
  const decodedInstructor = decodeURIComponent(instructor);

  const allCourses = Object.values(courseData).flat();
  const selectedCourse = allCourses.find(
    (course) =>
      course.title.trim().toLowerCase() === decodedTitle.trim().toLowerCase() &&
      course.instructor.trim().toLowerCase() === decodedInstructor.trim().toLowerCase()
  );

  if (!selectedCourse) {
    return (
      <div className="p-6 text-center text-white">
        <h1 className="text-2xl font-bold">Course Not Found</h1>
        <p>The requested course does not exist or has been removed.</p>
      </div>
    );
  }
  const navigate = useNavigate()

  return (
    <div className="p-6">
      <div className="mb-6">
        <p className="text-xl sm:text-2xl text-gray-400">
          Home / Catalog / <span className="text-yellow-400">{selectedCourse.title}</span>
        </p>
        <h1 className="text-2xl sm:text-4xl font-bold text-white">{selectedCourse.title}</h1>
        <h2 className="text-xl sm:text-2xl text-[#bfc22b]">By {selectedCourse.instructor}</h2>
      </div>

      <section className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Course Image & Details */}
        <Card className="w-full sm:w-2/3 lg:w-1/3 max-w-2xl">
          <CardHeader>
            {selectedCourse.Cardimg && (
              <CardImage src={selectedCourse.Cardimg} alt={selectedCourse.title} className="w-full object-cover rounded-lg" />
            )}
            <CardTitle>{selectedCourse.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="text-[#0b97c1] text-xl sm:text-2xl">{selectedCourse.instructor}</h1>
            <RatingStars rating={selectedCourse.rating} />
            <p className="text-gray-300 mt-4 text-sm sm:text-base">{selectedCourse.description}</p>
          </CardContent>
        </Card>

        {/* Arrow Icon for Large Screens */}
        <span className="hidden sm:flex sm:rotate-90 lg:rotate-0 lg:my-auto">
          <FaArrowRight size={50} fill="white" />
        </span>


        {/* Course Details Section */}
        <aside className="bg-[#226a7f] rounded-lg w-full lg:w-[50%] flex flex-col p-5">
          <h1 className="text-xl sm:text-2xl font-semibold text-white">Course lessons: {selectedCourse.lessons}</h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mt-3">Course Hours: {selectedCourse.totalHours} hrs</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mt-3">Price: {selectedCourse.price} ₹</h3>

          <p className="lg:text-2xl sm:text-lg text-white font-semibold mt-4">{selectedCourse.fulldescription}</p>

          <button className="bg-[#FFD60A] my-3 w-full sm:w-2/3 lg:w-[30%] mt-6 py-3 rounded-lg text-lg sm:text-xl font-semibold hover:bg-transparent hover:outline-2 hover:text-white border border-[#FFD60A] cursor-pointer"
          onClick={()=>{dispatch(addTocart(selectedCourse))
            toast.success("Course Added in the cart");
          }}
          >
            Add to cart
          </button>
        </aside>
      </section>
    </div>
  );
}
