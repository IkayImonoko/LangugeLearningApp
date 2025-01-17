import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import RegistrePage from './pages/RegistrePage';
import PrivateRoute from './components/PrivateRoute';
import AdminPage from './pages/AdminPage';

function App() {
    return (
        <Router>
        <div className="App">

                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/user/:id" element={ <PrivateRoute><UserPage/></PrivateRoute>}/>
                    <Route path="/admin" element={ <PrivateRoute><AdminPage/></PrivateRoute>}/>          
                    <Route path="/registre" element={<RegistrePage/>}/>
                </Routes>
        </div>
        </Router>
    );
}
  
export default App;

