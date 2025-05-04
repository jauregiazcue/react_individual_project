import './LostCard.css'

function LostCard({ object }) {
    return (
        <section>
            <div>
            <img src="https://placehold.co/600x400" className="logo" alt={"AUX"} />
            </div>
            <div>{object.object_id}</div>
        </section>
    )
}


export default LostCard;
