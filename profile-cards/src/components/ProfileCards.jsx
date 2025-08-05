import { NavLink } from "react-router-dom";

export default function ProfileCards(props) {
  return (
    <div className="profile-card">
      {props.users.map((user) => {
        return (
          <div key={user.uid} className="profile">
            <div className="pfp-name">
              <img src={user.img} />
              <NavLink to={user.url}>
                <h3>{user.name}</h3>
              </NavLink>
            </div>
            <div className="description">
              <h4>{user.job}</h4>
              {user.bio}
            </div>
          </div>
        );
      })}
    </div>
  );
}
