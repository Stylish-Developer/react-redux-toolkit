import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/feature";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const data = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
    navigate("/profile");
  };
  return (
    <>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter yourName</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Enter yourEmail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default Login;
