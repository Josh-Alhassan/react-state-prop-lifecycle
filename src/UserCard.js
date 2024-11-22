export default function UserCard({ name, age, email }) {
  return (
    <div
      style={{
        marginTop: "20px",
        width: "300px",
        backgroundColor: "red",
        padding: "20px",
        margin: "0 auto",
      }}
    >
      <h1>User Card</h1>
      <p>Hello, My name is {name}</p>
      <p>I am {age} years old.</p>
      <p>Here's my {email} if you want to reach out.</p>
    </div>
  );
}
