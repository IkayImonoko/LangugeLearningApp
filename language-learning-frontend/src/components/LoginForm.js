import React, { useState } from 'react';
//import { registreUser } from '../services/api';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();

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