import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <NavLink className="copyright" to="/home">
        &copy; 2025 Space Invaders
      </NavLink>
      <p>|</p>
      <a className="github" href="https://github.com/LIOvis">
        LIOvis
      </a>
    </div>
  );
}
