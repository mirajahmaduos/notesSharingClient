import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function UserNavbar() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="nav-bar bg-color" id="navbar1">
                <div className="logo">Notes<span>Share</span></div>
                <ul className="nav-items">
                    <li className="nav-item"><Link to="/user">Home</Link></li>
                    <li className="nav-item"><Link to="/upload">Upload Notes</Link></li>
                    <li className="nav-item"><Link to="/viewallnotes">View All Notes</Link></li>
                    <li className="nav-item"><Link to="/mynotes">My Notes</Link></li>
                    <li><button id="logoutBtn" onClick={() => navigate('/')}>Logout</button></li>
                    <li className="right" id="welcomeUser"></li>
                </ul>
            </nav>
        </>
    )
}