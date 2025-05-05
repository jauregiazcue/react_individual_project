import LostCard from '../lostCard/LostCard.jsx'
import { getObjectsByCategory } from "../../api/object.js"
import  Nav  from "../nav/Nav.jsx"

import { getAll } from '../../api/objectCat.js';

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

import './LostList.css'

function LostList() {
    const [objCat, setObjCatData] = useState([]);
    const [objects, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        handleFetchDataCategory();
        handleFetchData();
    }, []);

    const handleFetchDataCategory = async () => {
        setData(await getObjectsByCategory(id));
    }

    const handleFetchData = async () => {
        setObjCatData(await getAll());
    }
    return (
        <div className="lost-section">
            <section className='lost-left-section'>
                {objCat.map(object => {
                    return <Nav key={object.object_category_id} myItem={[
                        { text: object.name, newRoute: "/es/ciudad/objetosPerdidos/" + object.object_category_id },
                    ]} />
                })}
                
            </section>
            <article className="lost-right-section">
                {objects.map(object => {
                    return <LostCard key={object.object_id} object={object} />
                })}
            </article>
        </div>
    )
}


export default LostList;
