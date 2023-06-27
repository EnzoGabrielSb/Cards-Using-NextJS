//Use "use client" because the function 'onClick' is a fn to the FRONTEND.
"use client";

import { useRouter } from "next/navigation";

const Users = ({ users }) => {
  const router = useRouter();

  return (
    <>
      <h2>Users:</h2>
      {users.map((user) => (
        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
          <li>
            <div>
              <h2>{user.first_name}</h2>
              <h2>{user.last_name}</h2>
              <img src={user.avatar} />
              <h5>{user.email}</h5>
            </div>
          </li>
        </div>
      ))}
    </>
  );
};

export default Users;
