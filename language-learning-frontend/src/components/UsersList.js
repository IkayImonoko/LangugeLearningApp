import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../services/api';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]); // Храним ID выбранных пользователей


    useEffect(() => {
        fetchUsers()
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    const handleCheckboxChange = (userId) => {
        setSelectedUsers((prevSelected) =>
          prevSelected.includes(userId)
            ? prevSelected.filter((id) => id !== userId) // Убираем ID, если он уже выбран
            : [...prevSelected, userId] // Добавляем ID в список
        );
    };
    
    // Обработчик для удаления выбранных пользователей
    const handleDelete = async () => {
        try {
      // Вызываем API для удаления каждого выбранного пользователя
      await Promise.all(selectedUsers.map((userId) => deleteUser(userId)));

      // Удаляем пользователей из списка локально
      setUsers((prevUsers) =>
        prevUsers.filter((user) => !selectedUsers.includes(user.id))
      );

      // Очищаем список выбранных пользователей
      setSelectedUsers([]);
        } catch (error) {
      console.error("Error deleting users:", error);
        }
    };

    return (
        <div>
            <h2>Users List</h2>
                <button onClick={handleDelete} disabled={selectedUsers.length === 0}>
                Delete users
                </button>
            <div className="word-list-container">  
            <ul className="word-list"> 
                {users.map((user) => (
                    <li key={user.id} style={{ marginBottom: "10px" }}>
                        <label>
                            <input
                            type="checkbox"
                            checked={selectedUsers.includes(user.id)}
                            onChange={() => handleCheckboxChange(user.id)}
                            />
                       
                            <span style={{ marginLeft: "10px" }}>{user.id} - {user.username} - {user.email}</span>
                        </label>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default UsersList;
