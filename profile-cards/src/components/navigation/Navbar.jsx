import { NavLink } from "react-router-dom";
import Astronaut from "../../assets/astronaut.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-title">
        <img src={Astronaut} />
        <NavLink to="/home">Space Invaders</NavLink>
      </div>
      <NavLink to="/zim">Zim</NavLink>
      <NavLink to="/gir">GIR</NavLink>
      <NavLink to="/minimoose">Minimoose</NavLink>
    </div>
  );
}
