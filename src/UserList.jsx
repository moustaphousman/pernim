import User from "./User";

export default function UserList({ users, onRemove, onEdit }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <User key={user.login.uuid} user={user} onEdit={(editedUser) => onEdit(user.login.uuid, editedUser)} onRemove={() => onRemove(user.login.uuid)} />
                ))}
            </tbody>
        </table>
    );
}