import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getUser } from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../authContext';
import LogoutButton from '../components/LogoutButton';
import TopBar from '../components/TopBar';


function UserPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext); // Текущий залогиненный пользователь
    const [user, setUser] = useState([]); // Состояние для хранения данных пользователя
    const [error, setError] = useState([]); // Состояние для обработки ошибок
    const [loading, setLoading] = useState(true);


  useEffect(() => {
        // Проверяем, совпадает ли ID текущего пользователя с ID из URL
        if (!currentUser || currentUser.id !== parseInt(id)) {
            navigate(`/user/${currentUser.id}`); // Перенаправляем на страницу ошибки или на другую страницу
            return;
        }
          getUser(id)
              .then((data) => setUser(data))
              .catch((error) => console.error("Error geting users:", error));
      }, []);
 
    return(
    <>
        <header>
            <TopBar/>
            <Link to="/">
                <button className="home-button">Home</button>
            </Link>

        </header>
    </>
    );
};

export default UserPage;