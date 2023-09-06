import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import "./main.css"
import { BiUser } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import { TbFileUpload, TbFileDownload } from "react-icons/tb";
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble} from "react-icons/fa";


export default function Main() {
    return (
        <>
            <header className="header">
                <Navbar />           
            </header>

            <div className="header-content">
                <h1 className="main-heading">Online Notes Sharing</h1>
            </div>

            <section className="features">
                <div className="container-box">
                    <div className="buttons">
                        <div className="ribbon-box">
                            <Link to="/signup" className="block" id="createAccountBtn">
                                <BiUser size="2rem"/>
                                <h3 className="font">Create Account</h3>
                            </Link>
                        </div>

                        <div className="ribbon-box">
                            <Link to="/login" className="block" id="loginBtn">
                                <FiLogIn size="2rem"/>
                                <h3 className="font">Login</h3>
                            </Link>
                        </div>

                        <div className="ribbon-box">
                            <Link to="/login" className="block" id="uploadNotesBtn">
                                <TbFileUpload size="2rem"/>
                                <h3 className="font">Upload Notes</h3>
                            </Link>
                        </div>

                        <div className="ribbon-box">
                            <Link to="/login" className="block" id="downloadNotesBtn">
                                <TbFileDownload size="2rem"/>
                                <h3 className="font">Download Notes</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <FaFacebook size="2rem"/>
                <FaInstagram size="2rem"/>
                <FaTwitter size="2rem"/>
                <FaDribbble size="2rem"/>
                <p>Copy Write &copy; 2023, All Right Reserved</p>
            </footer>
        </>
    )
}