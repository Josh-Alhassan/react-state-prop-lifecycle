import UserCard from "./UserCard";
import users from "./utilities/user";

console.log(user.name);
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
