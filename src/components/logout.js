import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import './lo.css'
import '../App.css'

const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="content">
            <h1>Welcome, <span className="username">{user.name}</span></h1>
            
            <button onClick={handleLogout}>Logout</button>
            
        </div>
    );
};

export default Logout;