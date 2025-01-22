import UsersList from '../components/UsersList';
import AddWordForm from '../components/AddWordForm';
import WordList from '../components/WordList';
import TopBar from '../components/TopBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function MainPage() {
    return(
    <>
    <TopBar/>
    <p>Welcomr to russian/norwegian learning application!
        <br/>Have a fun!
    </p>   
    </>
    );
};

export default MainPage;