import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../store/feature";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const value = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <h1>Profile page</h1>
      <div>
        <h3>Welcome {value.name}!</h3>
      </div>
      <button onClick={handleLogout}>logout</button>
    </>
  );
};

export default Profile;
