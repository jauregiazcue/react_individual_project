import { useState, useEffect } from 'react';
import { useContext } from 'react';

//ASSETS
import keyImage from '../../assets/key.jpg'
import bagImage from '../../assets/bag.jpg'
import bicicleImage from '../../assets/bicicle.jpg'
import clothesImage from '../../assets/clothes.jpg'

import creditCardImage from '../../assets/creditCard.jpg'
import electronicsImage from '../../assets/electronics.jpg'
import joyasImage from '../../assets/joyas.jpg'

import otherImage from '../../assets/other.jpg'
import telephoneImage from '../../assets/telephones.jpg'

import Button from '../button/Button.jsx'
import { getAll } from '../../api/objectCat.js';

import RouteContext from '../../content/routeContext.jsx';

import './LostAndFound.css'


const img =[
     keyImage,  bicicleImage,
     bagImage ,  creditCardImage ,
     electronicsImage ,  joyasImage,
     telephoneImage ,  clothesImage ,
     otherImage];

function LostAndFound() {
    const [objCat, setData] = useState([]);
    const {route,onRouteChange} = useContext(RouteContext);

    useEffect(() => {
        handleFetchData();
    }, []);

    const handleFetchData = async () => {
        setData(await getAll());
    }
    
    return (
        <div className="my-section">
            {objCat.map(item => (
                <div key={item.name} >
                    <Button myFunction={() => onRouteChange("lostList" + item.object_category_id)}>
                        <img src={img[item.object_category_id - 1]} 
                        className="logo" alt={"Alt: " + item.name} />

                    </Button>
                    <p>{item.name}</p>
                </div>
            ))}

        </div>
    )
}


export default LostAndFound;
