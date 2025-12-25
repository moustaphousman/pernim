import { useState } from "react";

export default function User({ user, onEdit, onRemove }) {
    const [userState, setUserState] = useState(user);
    const [editMode, setEditMode] = useState(false);

    const editUser = (editedUser) => {

        onEdit(editedUser);
    };

    if (editMode) {
        return (
            <tr>
                <td>
                    <input
                        type="text"
                        value={userState.name.first}
                        onChange={(e) =>
                            setUserState({
                                ...userState,
                                name: { ...userState.name, first: e.target.value },
                            })
                        }
                    />
                    <input
                        type="text"
                        value={userState.name.last}
                        onChange={(e) =>
                            setUserState({
                                ...userState,
                                name: { ...userState.name, last: e.target.value },
                            })
                        }
                    />
                </td>
                <td>
                   <input
                        type="text"
                        value={userState.phone}
                        onChange={(e) =>
                            setUserState({ ...userState, phone: e.target.value })
                        }
                    />  
                </td>
                <td>
                    <input
                        type="email"
                        value={userState.email}
                        onChange={(e) =>
                            setUserState({ ...userState, email: e.target.value })
                        }
                    />
                </td>
                <td><button onClick={() => {
                    editUser(userState);
                    setEditMode(false);
                }}>Save</button></td>
                <td><button onClick={() => setEditMode(false)}>Cancel</button></td>
            </tr>
        );
    }
    return (
        <tr>
            <td>
                {userState.name.first} {userState.name.last}
            </td>
            <td>{userState.phone}</td>
            <td>{userState.email}</td>
            <td><button onClick={() => setEditMode(true)}>Edit</button></td>
            <td><button onClick={() => onRemove()}>Remove</button></td>
        </tr>
    );
}