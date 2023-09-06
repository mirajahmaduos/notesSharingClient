import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import "./about.css";
import "../MainPage/main.css"

export default function About() {
    return (
        <>
            <Navbar />
          
            <div className="about">
                <div className="abtcontainer">
                    <div className="about-image">
                        <img src={require('../images/about.jpg')} alt="about" className="about-photo" />
                    </div>
                    <div className="about-content">
                        <h2 className="content-heading">About Us</h2>
                        <p className="about-text">Online Note Sharing is the platform used for sharing notes using the website.This platform is used to share the notes over the internet between different users. Notes that the user wants for the particular subject can be found in the website.</p>
                    </div>
                </div>
            </div>
        </>
    )
}