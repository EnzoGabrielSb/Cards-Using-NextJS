const getUser = async (userId) => {
  const response = await fetch(`https://reqres.in/api/users/${userId}`);
  const data = await response.json();
  console.log(data.data);
  return data.data;
};

const userDetail = async ({ params }) => {
  const dataId = await getUser(params.userId);

  return (
    <>
      <h1>{dataId.first_name}</h1>
      <h1>{dataId.last_name}</h1>
      <h3>{dataId.email}</h3>
      <img src={dataId.avatar} />
    </>
  );
};

export default userDetail;
