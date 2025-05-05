import zarautzLogo from "../../assets/logo.png"
import Nav from "../nav/Nav.jsx"
import SearchFilter from "../searchFilter/SearchFilter.jsx";
import './Header.css'

function Header({ route }) {
    return (
        <div>
            <section className="top-section">
                <img src={zarautzLogo} className="logo" alt="Zarautz Logo" />
                <section className="left-section">
                    <a>es</a>
                    <a>eu</a>
                    <SearchFilter />
                </section>
            </section>

            <Nav myItem={[
                { text: "Inicio", myClass: (route === "home" ? "active" : ""), newRoute: "" },
                { text: "Trámites y Servicios", myClass: (route === "services" ? "active" : ""), newRoute: "/es/servicio" },
                { text: "Ciudad", myClass: (route === "city" ? "active" : ""), newRoute: "/es/ciudad" },
                { text: "Ayuntamiento", myClass: (route === "cityHall" ? "active" : ""), newRoute: "/es/ayuntamiento" },
                { text: "Turismo", myClass: (route === "turism" ? "active" : ""), newRoute: "/es/turismo" },
                { text: "Agenda 2030", myClass: (route === "calendar" ? "active" : ""), newRoute: "/es/agenda2030" }]}
            />
        </div>
    );
}

export default Header; 