import React from 'react';
import WordList from './components/WordList';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UsersList from './components/UsersList';
import AddWordForm from './components/AddWordForm';

function App() {
    return (
        <div className="App">
                <h1>Language Learning App
                <button className="login-button">
                    Login / Register
                </button>
                </h1>

            <AddWordForm/>
            <WordList />
            <UsersList/>
            <RegistrationForm/>
        </div>
    );
}
  
export default App;

