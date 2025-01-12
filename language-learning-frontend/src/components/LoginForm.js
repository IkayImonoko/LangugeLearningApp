import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../services/api';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
          fetchUsers()
              .then((data) => setUsers(data))
              .catch((error) => console.error("Error fetching users:", error));
      }, []);

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const user = users.find(
        (user) => user.username === formData.username && user.passwordHash === formData.password
    );

    console.log('Fetched users:', user);
    if (user) {
        // Если пользователь найден, перенаправляем на страницу пользователя
        navigate(`/user/${user.id}`); // Перенаправление на страницу пользователя (создайте такой маршрут)
      } else {
        // Если пользователь не найден, показываем ошибку
        setError('Invalid username or password');
      }

    // Пример валидации
    //if (formData.password !== formData.confirmPassword) {
      //setError('Passwords do not match');
      //return;
    //}

//setError('');
    //console.log('Form submitted:', formData);
    // Отправка данных на сервер
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" >Login</button>
    </form>
  );
}

export default LoginForm;