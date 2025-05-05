import { useContext } from 'react';
import RouteContext from '../../content/routeContext.jsx';

import './Nav.css'
function NavBar({ myItem }) {
    const {route,onRouteChange} = useContext(RouteContext);
    return (
        <nav className="my-nav">
            <ul>
                {myItem.map(item => (
                    <li
                        key={item.text}
                    >
                        <a  onClick={()=>onRouteChange(item.newRoute)}>{item.text}</a>
                        
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar; 