import { useState } from "react";
import { Navigate } from "react-router-dom";

export const Profile = () => {
    const [loggedOut, setLoggedOut] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem("loggedin");
        setLoggedOut(true);
    };

    if (loggedOut) {
        return <Navigate to={'/login'} />;
    }

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header text-center">
                    <h1>state: active</h1>
                    <h2>{user.user.email}</h2>
                </div>
                <div className="card-body text-center">
                    <button className="btn btn-primary mx-1" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};
