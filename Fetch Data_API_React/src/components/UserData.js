const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        //destructuring
        const { id, name, email } = curUser;
        const { street, city, zipcode } = curUser.address;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
              {city},{street}, ,{zipcode}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
