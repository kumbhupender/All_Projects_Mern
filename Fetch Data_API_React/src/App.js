import "./styles.css";
import { useEffect, useState } from "react";
import UserData from "./components/UserData";

export default function App() {
  const API = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);

  const fetchUserApi = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.length > 0) {
        setUsers(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserApi(API);
  }, []);

  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr className="table-row">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </div>
  );
}
