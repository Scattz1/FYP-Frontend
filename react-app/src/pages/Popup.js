import React from "react";
import './Popup.css';
import MainFeed from "../components/MainFeed.tsx";
import {Link} from "react-router-dom";


const Popup = () => {
    return (
        <div id="placeholder_bg" className="Popup">
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            <button  id="border-popup-button" onClick={openPopup}>
                <i className="fa-regular fa-comments"></i>
            </button>
            
            <div id="popup_container" className="main_white_background">
                <header id="Popup-header" className="main_blue_background header-border-radius">
                    <div id="Popup-nav-container" className="nav_container">
                        <div className="sub_nav_container">
                            <i className="fa-solid fa-angle-down nav_container_item border-top-left" onClick={openPopup}></i>
                            <p id="header-text">Virtual Assistant</p>
                        </div>

                        <Link id="popup-link" to="/">
                            <i className="fa-solid fa-house nav_container_item border-top-right"></i>
                        </Link>

                    </div>
                </header>
                <main className="content-popup">
                    <MainFeed/>
                </main>
            </div>
            
        </div>
    );
};

function openPopup() {
    
    if(document.getElementById("popup_container").style.height === "35rem")
    {
        document.getElementById("border-popup-button").style.display = "inline-block";
        document.getElementById("popup_container").style.height = "0";
        document.getElementById("popup_container").style.right = "0";
        document.getElementById("popup_container").style.bottom = "0";
    }
    else
    {
        document.getElementById("border-popup-button").style.display = "none";
        document.getElementById("popup_container").style.height = "35rem";
        document.getElementById("popup_container").style.position = "fixed";
        document.getElementById("popup_container").style.right = "1rem";
        document.getElementById("popup_container").style.bottom = "1rem";
    }
}
export default Popup;
