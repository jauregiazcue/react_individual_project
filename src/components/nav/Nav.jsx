import { useContext } from 'react';
import RouteContext from '../../content/routeContext.jsx';
import { NavLink } from 'react-router-dom';

import './Nav.css'
function NavBar({ myItem }) {
    const { route, onRouteChange } = useContext(RouteContext);
    return (
        <nav className="my-nav">
            <ul>
                {myItem.map(item => (
                    <li
                        key={item.text}
                    >
                        <NavLink
                            to={item.newRoute}
                            className={({ isActive }) => {
                                // isActive será true cuando estemos en esta ruta
                                return isActive ? 'link active' : 'link';
                            }}
                        >
                            {item.text}
                        </NavLink>

                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar; 