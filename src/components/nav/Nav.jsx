import './Nav.css'

function NavBar({ myItem }) {
    return (
        <div className="my-nav">
            <ul>
                {myItem.map(item => (
                    <li
                        key={item}
                    >
                        <a>{item}</a>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavBar; 