import SideBarText from "./SideBarText.tsx";
export default function SideBar(props) {
    return (

        <aside id="closing_sidebar" className="sidebar main_blue_hover_background">
            <h2 id={"sidebar_header"} className={"sidebar_header"}>
                <button id="openbtn" onClick={openNav}><i className="fa-solid fa-table-columns"></i></button>
                Recent
                <a><i className="fa-regular fa-pen-to-square"></i></a>
            </h2>
            <SideBarText text={'GGson'}/>
            <SideBarText text={'ggson2'}/>
            <SideBarText text={'ggson3'}/>
            <SideBarText text={'ggson4sadsadsadsadsdaasasdasdasdasdas'}/>
            <SideBarText text={'lesgooooo'}/>
        </aside>
    )


    function openNav() {
        if (document.getElementById("closing_sidebar").style.width == "20%")
            {
                document.getElementById("closing_sidebar").style.width = "0";
                document.getElementById("closing_sidebar").style.padding = "0";
                document.getElementById("openbtn").style.position = "absolute";
                document.getElementById("openbtn").style.top = "3rem";
                document.getElementById("openbtn").style.left = "1rem";
                document.getElementById("openbtn").style.color = "#00296e";
            }
            else
            {
                document.getElementById("closing_sidebar").style.width = "20%";
                document.getElementById("closing_sidebar").style.padding = "1rem";
                document.getElementById("openbtn").style.position = "relative";
                document.getElementById("openbtn").style.top = "0";
                document.getElementById("openbtn").style.left = "0";
                document.getElementById("openbtn").style.color = "white";
            }
        }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        //document.getElementById("main").style.marginLeft = "0";
    }
    
}



