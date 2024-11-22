const cardStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "10px 0",
};

export default function UserCard({ name, age, email }) {
  return (
    <div style={cardStyle}>
      <h1>User Card</h1>
      <p>
        Hello, My name is <strong>{name}</strong>
      </p>
      <p>
        I am <strong>{age}</strong> years old.
      </p>
      <p>
        Here's my <strong>{email}</strong> if you want to reach out.
      </p>
    </div>
  );
}
