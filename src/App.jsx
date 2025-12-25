import { useState } from 'react'
import userData from './data/user-data.json'
import './App.css'
import UserList from './UserList'

function App() {
  const [users, setUsers] = useState(userData.results)
  const [userFormData, setUserFormData] = useState({ name: { first: '', last: '' }, email: '' })
  const [createMode, setCreateMode] = useState(false);
  const removeUser = (id) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== id);
    setUsers(filteredUsers);
  };

  const editUser = (id, editedUser) => {
    const updatedUsers = users.map((user) => {
      if (user.login.uuid === id) {
        return {
          ...user,
          ...editedUser,
        };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  const createUser = () => {
    const newUser = {
      login: {
        uuid: Math.random().toString(36).substring(2, 9),
      },
      ...userFormData,
    };
    setUsers([...users, newUser]);
    setCreateMode(false);
  };

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => setCreateMode(true)}>Create User</button>
      {createMode && <form action="">
        <input type="text" placeholder="First Name" onChange={(e) => setUserFormData({ ...userFormData, name: { ...userFormData.name, first: e.target.value } })} />
        <input type="text" placeholder="Last Name" onChange={(e) => setUserFormData({ ...userFormData, name: { ...userFormData.name, last: e.target.value } })} />
      <input type="tel" placeholder="Phone" onChange={(e) => setUserFormData({ ...userFormData, phone: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setUserFormData({ ...userFormData, email: e.target.value })} />
        <button type="submit" onClick={() => createUser()}  >Add User</button>
      </form>}
      <UserList users={users} onRemove={removeUser} onEdit={editUser} />
    </>
  )
}

export default App
