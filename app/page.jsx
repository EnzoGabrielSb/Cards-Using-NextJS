// Si usamos hooks de React en Next Js no funciona correctamente.

async function fetchUsers() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  return data.data;
}

async function IndexPage() {
  const users = await fetchUsers();

  return (
    <div>
      <h1> Home Page </h1>
      <h3>Users:</h3>
      {users.map((user) => (
        <li>
          <div>
            <h5>{user.first_name}</h5>
            <img src={user.avatar} alt="" />
          </div>
        </li>
      ))}
    </div>
  );
}

export default IndexPage;
