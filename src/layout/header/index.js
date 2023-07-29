import { NavLink } from "react-router-dom";

const Header = () => {
  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? "blueviolet" : "#000000",
      fontSize: isActive ? "20px" : "14px",
    };
  };
  return (
    <>
      <nav>
        <NavLink style={navStyle} to="/">
          HOME
        </NavLink>
        <NavLink style={navStyle} to="/login">
          LOGIN
        </NavLink>
        <NavLink style={navStyle} to="/profile">
          PROFILE
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
