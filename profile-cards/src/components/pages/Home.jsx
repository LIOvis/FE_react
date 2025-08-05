import ProfileCards from "../ProfileCards";
import Users from "../Users";

export default function Home() {
  return (
    <div>
      <ProfileCards users={Users()} />
    </div>
  );
}
