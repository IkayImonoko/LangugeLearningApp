import RegistrationForm from '../components/RegistrationForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function RegistrePage() {
return (
<>
    <header>
        <Link to="/">
            <button className="home-button">Home</button>
        </Link>
    </header>
<RegistrationForm/>
</>
);
};

export default RegistrePage;