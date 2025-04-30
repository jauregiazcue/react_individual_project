import './Nav.css'

function NavBar({ myItem, onRouteChange }) {
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