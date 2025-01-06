import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers()
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} - {user.email} - {user.passwordhash} - {user.userwords}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
