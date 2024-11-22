import UserCard from "./UserCard";
import users from "./utilities/user";

export default function () {
  return (
    <>
      <h1>User List</h1>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          email={user.email}
        />
      ))}
    </>
  );
}
