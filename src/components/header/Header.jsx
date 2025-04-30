import zarautzLogo from "../../assets/logo.png"
import Nav from "../nav/Nav.jsx"
import './Header.css'

function Header({route, onRouteChange}) {
    return (
        <div>
            <img src={zarautzLogo} className="logo" alt="Zarautz Logo" />
            <Nav myItem={[
                {text:"Inicio", myClass : (route === "home" ? "active" : ""),newRoute : "home"}, 
                 {text:"Trámites y Servicios", myClass : (route === "services" ? "active" : ""),newRoute : "services"}, 
                 {text:"Ciudad", myClass : (route === "city" ? "active" : ""),newRoute : "city"}, 
                 {text:"Ayuntamiento", myClass : (route === "cityHall" ? "active" : ""),newRoute : "cityHall"}, 
                 {text:"Turismo", myClass : (route === "turism" ? "active" : ""),newRoute : "turism"}, 
                 {text:"Agenda 2030", myClass : (route === "calendar" ? "active" : ""),newRoute : "calendar"}]} 
                 onRouteChange = {onRouteChange} />
        </div>
    );
}

export default Header; 