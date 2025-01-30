import React from "react";
import './Popup.css';
import MainFeed from "../components/MainFeed.tsx";
import InputBar from "../components/InputBar.tsx"
import {Link} from "react-router-dom";


const Popup = () => {
    return (
        <div id="placeholder_bg" className="Popup">
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            <div id="popup_container" className="main_white_background">
                <header className="main_blue_background header-border-radius">
                    <div className="nav_container">
                        <div className="sub_nav_container">
                            <i className="fa-solid fa-house nav_container_item border-top-left"></i>
                            <p id="header-text">Virtual Assistant</p>
                        </div>

                        <Link id="popup-link" to="/"><i
                            className="fa-solid fa-arrow-right nav_container_item border-top-right"></i></Link>

                    </div>
                </header>
                <main className="content-popup">
                    <InputBar/>
                    <MainFeed/>
                </main>
            </div>
        </div>
    );
};

export default Popup;
