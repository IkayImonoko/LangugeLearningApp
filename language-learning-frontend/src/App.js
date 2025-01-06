import React from 'react';
import WordList from './components/WordList';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UsersList from './components/UsersList';

function App() {
    return (
        <div className="App">
            <h1>Language Learning App</h1>
            <WordList />
            <UsersList/>
            <RegistrationForm/>
        </div>
    );
}

export default App;

