import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/zim">Zim</NavLink>
      <NavLink to="/gir">GIR</NavLink>
      <NavLink to="/minimoose">Minimoose</NavLink>
    </div>
  );
}
