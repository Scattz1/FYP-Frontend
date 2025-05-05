import SideBarText from "./SideBarText.tsx";
import { useState } from "react";
export default function SideBar(props) {
    
    const [messages, setMessages] = useState([]);

    function addSidebarItem() {
        setMessages(prev => [...prev, "New Message"]);
    }

    return (
        <aside id="closing_sidebar" className="sidebar main_blue_hover_background">
            <h2 id="sidebar_header">
                <button id="openbtn" onClick={openNav}><i className="fa-solid fa-table-columns"></i></button>
                Recent
                <button id="addSidebarButton" onClick={addSidebarItem}><i className="fa-regular fa-pen-to-square"></i>
                </button>
            </h2>
            {messages.map((msg, i) => (
                <SideBarText key={i} text={'conversation ' + i}/>
            ))}
        </aside>

)
    ;

    function openNav() {
        
        if (document.getElementById("closing_sidebar").style.width === "20%") {
            document.getElementById("closing_sidebar").style.width = "0";
            document.getElementById("closing_sidebar").style.padding = "0";
            document.getElementById("openbtn").style.position = "absolute";
            document.getElementById("openbtn").style.top = "3rem";
            document.getElementById("openbtn").style.left = "1rem";
            document.getElementById("openbtn").style.color = "#00296e";
        } else {
            document.getElementById("closing_sidebar").style.width = "20%";
            document.getElementById("closing_sidebar").style.padding = "1rem";
            document.getElementById("openbtn").style.position = "relative";
            document.getElementById("openbtn").style.top = "0";
            document.getElementById("openbtn").style.left = "0";
            document.getElementById("openbtn").style.color = "white";
        }
    }
    
}



