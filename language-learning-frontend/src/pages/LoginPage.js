import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function LoginPage() {
return (
<>
    <header>
        <Link to="/">
            <button className="home-button">Home</button>
        </Link>
    </header>
<LoginForm/>
<Link to="/registre">
            <button className="home-button">Registre</button>
        </Link>
</>
);
};

export default LoginPage;