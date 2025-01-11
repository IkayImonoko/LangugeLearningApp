import UsersList from '../components/UsersList';
import AddWordForm from '../components/AddWordForm';
import WordList from '../components/WordList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function MainPage() {
    return(
    <>
    <header>
                    <h1>Language Learning App</h1>
                    <Link to="/login">
                        <button className="login-button">Login / Register</button>
                    </Link>
                </header>
    <AddWordForm /> 
    <WordList />
    <UsersList />
    </>
    );
};

export default MainPage;