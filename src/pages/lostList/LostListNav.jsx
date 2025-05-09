
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
        setObjCatData(setObjCorrectly(await getAll()));
    }

    return (
        <VerticalNav  articleClassName="page__article--lostList" myItem={objCat}>
            <Outlet/>
        </VerticalNav>
    )
}


export default LostList;
