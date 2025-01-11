import React, { useState } from 'react';
import { registreUser } from '../services/api';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault(); // предотвратить стандартное поведение формы

    setError('');
        
    try {
      // Валидация
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      // Отправка данных на сервер
      await registreUser(formData.username, formData.email, formData.password);

      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      
      // Очистить форму или выполнить другое действие после успешной регистрации
      console.log('User registered successfully');
    } catch (err) {
      // Обработка ошибок
      setError('Failed to register user. Please try again.');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      
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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
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

      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
