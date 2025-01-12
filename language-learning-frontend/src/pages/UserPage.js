import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getUser } from '../services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UserPage() {
    const { id } = useParams();
    const [user, setUser] = useState([]); // Состояние для хранения данных пользователя
    const [error, setError] = useState([]); // Состояние для обработки ошибок

  useEffect(() => {
          getUser(id)
              .then((data) => setUser(data))
              .catch((error) => console.error("Error geting users:", error));
      }, []);
 
    return(
    <>
        <header>
            <h1>User Page, hello {user.username} </h1>
                <Link to="/">
                    <button className="home-button">Home</button>
                </Link>

        </header>
    </>
    );
};

export default UserPage;