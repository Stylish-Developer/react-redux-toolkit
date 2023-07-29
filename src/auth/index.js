import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const Private = ({ children }) => {
  const value = useSelector((state) => state.user.value);

  if (value.name === "") {
    alert("Please login to continue ");
    return <Navigate to="/login" />;
  }
  return children;
};

export default Private;
