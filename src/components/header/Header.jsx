import zarautzLogo from "../../assets/logo.png"
import Nav from "../nav/Nav.jsx"
import './Header.css'

function Header() {
    return (
        <div>
            <img src={zarautzLogo} className="logo" alt="Zarautz Logo" />
            <Nav myItem={["Inicio", "Tràmites y Servicios", "Ciudad", "Ayuntamiento", "Turismo", "Agenda 2030"]} />
        </div>
    );
}

export default Header; 