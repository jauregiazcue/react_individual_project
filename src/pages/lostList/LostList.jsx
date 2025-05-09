import LostCard from '../../components/lostCard/LostCard.jsx'
import { getObjectsByCategory } from "../../api/object.js"

import { getAll } from '../../api/objectCat.js';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

import './LostList.css'

function LostList() {
    const [objects, setData] = useState([]);
    const [objCat, setCatData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        handleFetchData();

    }, [id]);

    const handleFetchData = async () => {
        setData(await getObjectsByCategory(id));
        setCatData(await getAll());
    }

    console.log(objCat);
    return (
        <>
            <h1> Catálogo de {objCat.length > 0 ? objCat[id - 1].name : "Title"}</h1>
            <section className='page__article'>
                {objects.map(object => {
                    return <LostCard key={object.object_id} object={object} />
                })}
            </section>

        </>
    )
}


export default LostList;
