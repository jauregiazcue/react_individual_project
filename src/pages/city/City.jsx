import { NavLink } from 'react-router-dom';
import './City.css'

function City() {
    return (
        <div>
            <h1>Ciudad</h1>
            <NavLink
                to="/es/ciudad/objetosPerdidos"
                className={({ isActive }) => {
                    let classNames = isActive ? 'link active nav__a"' : 'link nav__a"';
                    
                    return classNames;
                }}
            >
                <p className='city__p'>Objetos Perdidos</p>
            </NavLink>
        </div>
    );
}

export default City; 