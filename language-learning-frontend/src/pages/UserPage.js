import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function UserPage() {
    return(
    <>
        <header>
            <h1>User Page</h1>
                <Link to="/">
                    <button className="home-button">Home</button>
                </Link>

        </header>
    </>
    );
};

export default UserPage;