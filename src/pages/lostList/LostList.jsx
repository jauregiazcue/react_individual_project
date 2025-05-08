import LostCard from '../../components/lostCard/LostCard.jsx'
import { getObjectsByCategory } from "../../api/object.js"

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

import './LostList.css'

function LostList() {
    const [objects, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        handleFetchData();
        
    }, [id]);

    const handleFetchData = async () => {
        setData(await getObjectsByCategory(id));
    }

    return (
        <>
            {objects.map(object => {
                    return <LostCard key={object.object_id} object={object} />
                })}
        </>
    )
}


export default LostList;
