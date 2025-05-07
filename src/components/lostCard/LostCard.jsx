import './LostCard.css'

function LostCard({ object }) {
    return (
        <section className='lost-card'>
            <div>
            <img src={object.image_source} className="logo" alt={"AUX"} />
            </div>
            <div>{object.object_id}</div>
        </section>
    )
}


export default LostCard;
