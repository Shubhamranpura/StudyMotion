import { Navigate } from "react-router-dom";
import Userrole from "../../hooks/Userrole";

export default function Instructorlinks({ children }) {
  const role = Userrole();

  if (role === "instructor") {
    return children;
  } else if (role === null) {
    return null; // Or a loader
  } else {
    return <Navigate to="/" replace />;
  }
}
