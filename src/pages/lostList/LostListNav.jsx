
import VerticalNav from "../../components/verticalNav/VerticalNav.jsx";

import { getAll } from '../../api/objectCat.js';

import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom"

import './LostList.css'

function setObjCorrectly(objs) {
    const correctObjs = objs.map(obj => {
        return ({
            text: obj.name,
            newRoute: "/es/ciudad/objetosPerdidos/op/" + obj.object_category_id
        });
    });
    return correctObjs;
}

function LostList() {
    const [objCat, setObjCatData] = useState([]);

    useEffect(() => {
        handleFetchData();
    }, []);


    const handleFetchData = async () => {
        setObjCatData(await getAll());
    }

    return (
        <VerticalNav  myItem={setObjCorrectly(objCat)}>
            <Outlet/>
        </VerticalNav>
    )
}


export default LostList;
