import React, { useContext } from 'react';
import { AuthContext } from '../authContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return <button class="login-button" onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
