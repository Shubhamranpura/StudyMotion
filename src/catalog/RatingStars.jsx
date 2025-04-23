import { useId } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export function RatingStars({ rating }) {
  const id = useId()
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex my-5 text-yellow-400  " key={id}>
      {Array(fullStars).fill(<FaStar/>)}
      {hasHalfStar && <FaStarHalfAlt />}
      {Array(emptyStars).fill(<FaRegStar />)}
    </div>
  );
}
