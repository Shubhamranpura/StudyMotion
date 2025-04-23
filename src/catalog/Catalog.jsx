import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardImage, CardTitle } from "./ui/card";
import { RatingStars } from "./RatingStars";
import courseData from "../catalog/courseimages";

export default function Catalog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Web Development");

  return (
    <div className="p-6">
      <div className="mb-6">
        <p className="text-sm text-gray-400">
          Home / Catalog / <span className="text-yellow-400">{selectedCategory}</span>
        </p>
        <h1 className="text-2xl font-bold text-white">{selectedCategory}</h1>
        <p className="text-gray-300">Explore top courses in {selectedCategory}.</p>
      </div>

      <div className="mb-4">
        <select
          className="p-2 border rounded bg-gray-800 text-white"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {Object.keys(courseData).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courseData[selectedCategory].map((course) => (
          <Card key={course.id} className="hover:scale-105 transition-all ease-in">
            <CardHeader>
              {course.Cardimg && <CardImage src={course.Cardimg} alt={course.title} />}
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-[#0b97c1] text-3xl">{course.instructor}</h1>
              <RatingStars rating={course.rating} />
              <p>{course.description}</p>
            </CardContent>
            <button
              className="text-3xl text-[#8d8d8d] my-4 cursor-pointer hover:underline-2"
              onClick={() => navigate(`/course/${encodeURIComponent(course.title)}/${encodeURIComponent(course.instructor)}`)}
            >
              {"View course..."}
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
