import './App.css';
import './components/components.css'
import SideBarText from './components/SideBarText.tsx';
import MainFeed from './components/MainFeed.tsx';
import InputBar from "./components/InputBar.tsx";
import SideBar from "./components/SideBar.tsx"
import { Link } from "react-router-dom";
function App() {
  return (
      <div className="App Global-container">
          <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
          
          <header className="main_blue_background">
              <nav className="nav_container">
                  <div className="sub_nav_container">
                      <i className="fa-regular fa-user nav_container_item"></i>
                      <a><i className="fa-solid fa-gear nav_container_item"></i></a>
                  </div>

                  <Link id="popup-link" to="/Popup"><i className="fa-solid fa-arrow-right-from-bracket nav_container_item"></i></Link>
              </nav>
          </header>

          <div className="container main_white_background">
             
              <SideBar/>
              
              <main className="content">
                  <MainFeed/>
                  <InputBar/>
              </main>
          </div>
      </div>
  );
}

export default App;
