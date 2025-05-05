import './App.css';
import './components/components.css'
import MainFeed from './components/MainFeed.tsx';
import SideBar from "./components/SideBar.tsx";
import { Link } from "react-router-dom";

let optionValue = "";
function App() {
    
  return (
      <div className="App Global-container">
          <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
          
          <header className="main_blue_background">
              <nav className="nav_container">
                  <div className="sub_nav_container">
                      <div id="profile-dropdown-container">
                          <button className="nav_button" onClick={OpenUserPopup}><i className="fa-regular fa-user nav_container_item"></i></button>
                          <div id="profile-dropdown-content">
                              <p id="profile-dropdown-header" className="profile-dropdown-item">Profile</p>
                              <i id="profile-dropdown-pfp" className="fa-regular fa-user profile-dropdown-item"></i>
                              <button className="profile-dropdown-item dropdown-buttons" onClick={toggleUsablePopup}><i className="fa-solid fa-info"></i> Profile Details
                              </button>
                              <button className="profile-dropdown-item dropdown-buttons" onClick={toggleUsablePopup}><i className="fa-solid fa-bell"></i> Notifications
                              </button>
                              <button className="profile-dropdown-item dropdown-buttons" onClick={toggleUsablePopup}><i class="fa-solid fa-folder-open"></i> Archive
                              </button>
                          </div>
                      </div>
                      <div id="setting-dropdown-container">
                          <button className="nav_button" onClick={OpenSettingPopup}>
                              <i className="fa-solid fa-gear nav_container_item"></i>
                          </button>
                          <div id="setting-dropdown-content">
                              <p id="setting-dropdown-header" className="setting-dropdown-item ">Settings</p>
                              <button className="setting-dropdown-item dropdown-buttons" onClick={toggleUsablePopup}><i class="fa-solid fa-clock-rotate-left"></i> History
                              </button>
                              <button className="setting-dropdown-item dropdown-buttons" onClick={toggleUsablePopup}><i class="fa-solid fa-lock"></i> Security
                              </button>
                          </div>
                      </div>
                  </div>

                  <Link id="popup-link" to="/Popup"><i
                      className="fa-solid fa-arrow-right-from-bracket nav_container_item"></i></Link>
              </nav>
          </header>

          <div className="container main_white_background">
             
              <SideBar/>
              
              <main className="content">
                  <MainFeed/>
              </main>
          </div>

          <div id="usable-popup">
              <p id="usable-popup-title">Title</p>
              <p>placeholder 1 </p>
              <p>placeholder 2</p>
              <p>placeholder 3</p>
              <p>placeholder 4</p>
              <button id={"usable-popup-button"} onClick={toggleUsablePopup}>Close</button>
          </div>
      </div>
  );
}


function showAllProfileContent(mode) {

    const allItems = document.getElementsByClassName("profile-dropdown-item");

    for (let i = 0; i < allItems.length; i++) {
        const item = allItems[i];
        if(mode === 0)
        {
            item.style.display = "none";
        }
        else
        {
            item.style.display = "inline-block";
        }
        
    }
}
function showAllSettingContent(mode)
{

    const allItems = document.getElementsByClassName("setting-dropdown-item");

    for (let i = 0; i < allItems.length; i++)
    {
        const item = allItems[i];
        if(mode === 0)
        {
            item.style.display = "none";
        }
        else
        {
            item.style.display = "inline-block";
        }

    }
}

function toggleUsablePopup()
{
    if(document.getElementById("usable-popup").style.display === "none")
    {
        document.getElementById("usable-popup").style.display = "flex";
    }
    else
    {
        document.getElementById("usable-popup").style.display = "none";
    }
}

function OpenUserPopup()
{
    console.log(document.getElementById("setting-dropdown-content").style.height);
    //close the other popup if open
    if(document.getElementById("setting-dropdown-content").style.height > "0px")
    {
        document.getElementById("setting-dropdown-content").style.height = "0px";
        document.getElementById("setting-dropdown-content").style.padding = "0px";
        showAllSettingContent(0);
  
    }
    
    if(document.getElementById("profile-dropdown-content").style.height > "0px")
    {
        document.getElementById("profile-dropdown-content").style.height = "0px";
        document.getElementById("profile-dropdown-content").style.padding = "0px";
        showAllProfileContent(0);
    }
    else
    {
        document.getElementById("profile-dropdown-content").style.height = "fit-content";
        document.getElementById("profile-dropdown-content").style.padding = "0.5rem";
        showAllProfileContent(1);
    }
}
function OpenSettingPopup()
{
    //close the other popup if open
    if(document.getElementById("profile-dropdown-content").style.height > "0px")
    {
        document.getElementById("profile-dropdown-content").style.height = "0px";
        document.getElementById("profile-dropdown-content").style.padding = "0px";
        showAllProfileContent(0);
    }
    
    if(document.getElementById("setting-dropdown-content").style.height > "0px")
    {
        document.getElementById("setting-dropdown-content").style.height = "0px";
        document.getElementById("setting-dropdown-content").style.padding = "0px";
        showAllSettingContent(0)
    }
    else
    {
        document.getElementById("setting-dropdown-content").style.height = "fit-content";
        document.getElementById("setting-dropdown-content").style.padding = "0.5rem";
        showAllSettingContent(1);
    }
}

export default App;
