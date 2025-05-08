import './LostCard.css'

function LostCard({ object }) {
    return (
        <section className='lostCardBlock'>
            <div>
            <img src={object.image_source}  alt={"AUX"} />
            </div>
            <div>{object.object_id}</div>
        </section>
    )
}


export default LostCard;
