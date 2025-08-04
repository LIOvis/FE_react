import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/toggle-greeting">Toggle Greeting</NavLink>
      <NavLink to="/toggle-visibility">Toggle Visibility</NavLink>
    </div>
  );
}
