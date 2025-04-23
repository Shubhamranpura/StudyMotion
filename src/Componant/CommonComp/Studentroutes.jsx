import { Navigate } from "react-router-dom";
import Userrole from "../../hooks/Userrole";
export default function Studentroutes({ children }) {
  const role = Userrole();
  console.log(role)
  if (role === "student") {
    return children;
  } else if (role === null) {
    return null; // Or a loader
  } else {
    return <Navigate to="/" replace />;
  }
}
