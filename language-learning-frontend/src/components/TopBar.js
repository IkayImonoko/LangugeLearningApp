import { Link } from "react-router-dom";
import { AuthContext } from "../authContext";
import { useContext } from "react";
import LogoutButton from "./LogoutButton";

const TopBar = () => {
    const { currentUser } = useContext(AuthContext);

    return(

        <header>
        <h1 class="topbar">Language Learning App
        {currentUser ? (
            <>
            <span> Welcome, {currentUser.username} </span>
            <LogoutButton/>
            </>
        ) : (
          <Link to="/login">
            <button className="login-button">Login / Register</button>
          </Link>
        )}
        </h1>
    </header>
    );
};
export default TopBar;