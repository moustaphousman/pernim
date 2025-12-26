import UserList from "./UserList";

export default function UserManagement({ users, setUsers, createMode, setCreateMode, userFormData, setUserFormData, editUser, createUser, removeUser }) {
    return (
         <div className="user-management-container">
        <div className="user-management-header">User Management</div>
        <button onClick={() => setCreateMode(true)}>Create User</button>
        {createMode && <form action="">
          <input type="text" placeholder="First Name" onChange={(e) => setUserFormData({ ...userFormData, name: { ...userFormData.name, first: e.target.value } })} />
          <input type="text" placeholder="Last Name" onChange={(e) => setUserFormData({ ...userFormData, name: { ...userFormData.name, last: e.target.value } })} />
          <input type="tel" placeholder="Phone" onChange={(e) => setUserFormData({ ...userFormData, phone: e.target.value })} />
          <input type="email" placeholder="Email" onChange={(e) => setUserFormData({ ...userFormData, email: e.target.value })} />
          <button type="submit" onClick={() => createUser()}  >Add User</button>
        </form>}
        <UserList users={users} onRemove={removeUser} onEdit={editUser} />
      </div>
    );
}  