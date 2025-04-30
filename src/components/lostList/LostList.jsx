import LostCard from '../lostCard/LostCard.jsx'
import {getAllLostObjects} from "../../api/object.js"

import { useState, useEffect } from 'react';

function LostList() {
    const [objects, setData] = useState([]);

    useEffect(() => {
        handleFetchData();
    }, []);

    const handleFetchData = async () => {
        setData(await getAllLostObjects());
    }

    return (
        <section>
            {objects.map(object => {
                return <LostCard key={object.first_name} object={object} />
            })}

        </section>
    )
}


export default LostList;
