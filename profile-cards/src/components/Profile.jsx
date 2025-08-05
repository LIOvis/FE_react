import Users from "./Users";
import ProfileCards from "./ProfileCards";

export default function Profile(uid) {
  const users = Users();
  const userList = [];
  users.map((user) => {
    if (user.uid === uid) {
      userList.push(user);
    }
  });

  return (
    <div>
      <ProfileCards users={userList} />
    </div>
  );
}
