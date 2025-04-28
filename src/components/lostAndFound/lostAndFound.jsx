import Button from '../button/Button.jsx'
import './lostAndFound.css'

function LostAndFound({ myItem }) {
    return (
        <div className="my-section">
            {myItem.map(item => (
                <div>
                    <Button
                        key={item.text}
                    >
                        <img src={item.image} className="logo" alt={item.text} />

                    </Button>
                    <p>{item.text}</p>
                </div>
            ))}

        </div>
    )
}


export default LostAndFound;
