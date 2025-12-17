import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userlists, setUserlists] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUserlists(response.data ?? []);
    } catch (error) {
      console.log("Không thể tải !!!", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {userlists.map((user) => (
        <ul key={user.id}>
          <li><strong>{user.name}</strong></li>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
        </ul>
      ))}
    </div >
  )
}

export default App