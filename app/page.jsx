// Si usamos hooks de React en Next Js no funciona correctamente. Ya que se guarda todo en el BACK.
import Users from "../components/Users";

async function fetchUsers() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  console.log(data);
  return data.data;
}

async function IndexPage() {
  const users = await fetchUsers();

  return (
    <div>
      <h1> Home Page </h1>
      <Users users={users} />
    </div>
  );
}

export default IndexPage;
