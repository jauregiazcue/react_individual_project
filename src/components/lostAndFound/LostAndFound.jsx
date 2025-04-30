import Button from '../button/Button.jsx'
import './LostAndFound.css'

function LostAndFound({ myItem }) {

    
    return (
        <div className="my-section">
            {myItem.map(item => (
                <div key={item.text}>
                    <Button>
                        <img src={item.image} className="logo" alt={"Alt: " + item.text} />

                    </Button>
                    <p>{item.text}</p>
                </div>
            ))}

        </div>
    )
}


export default LostAndFound;
