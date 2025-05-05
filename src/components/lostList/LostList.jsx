import LostCard from '../lostCard/LostCard.jsx'
import {getObjectsByCategory} from "../../api/object.js"

import { useState, useEffect } from 'react';

import './LostList.css'

function LostList({category_id}) {
    const [objects, setData] = useState([]);

    useEffect(() => {
        handleFetchData();
    }, []);

    const handleFetchData = async () => {
        setData(await getObjectsByCategory(category_id));
    }

    return (
        <section className="lost-list">
            {objects.map(object => {
                return <LostCard key={object.object_id} object={object} />
            })}

        </section>
    )
}


export default LostList;
