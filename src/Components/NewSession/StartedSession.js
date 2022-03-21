const StartedSession = (props) => {
  return (
    <div>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.url} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StartedSession;
