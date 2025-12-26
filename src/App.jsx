import { useState } from 'react'
import userData from './data/user-data.json'
import urlsData from './data/urls-data.json'
import './App.css'
import UrlShortener from './UrlShortener'
import UserManagement from './UserManagement'

function App() {
  const [users, setUsers] = useState(userData.results)
  const [userFormData, setUserFormData] = useState({ name: { first: '', last: '' }, email: '' })
  const [createMode, setCreateMode] = useState(false);
  const [urls, setUrls] = useState(urlsData);

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

  const removeUrl = (code) => {
    const filteredUrls = urls.filter((url) => url.key !== code);
    setUrls(filteredUrls);
  };

  return (
    <>
      <h1>Hello World</h1>
      <UrlShortener urls={urls} removeUrl={removeUrl} setUrls={setUrls} />
      <UserManagement users={users} setUsers={setUsers} removeUser={removeUser} editUser={editUser} createMode={createMode} setCreateMode={setCreateMode} userFormData={userFormData} setUserFormData={setUserFormData} createUser={createUser} />
    </>
  )
}

export default App
