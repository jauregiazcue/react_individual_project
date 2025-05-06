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

import { NavLink } from 'react-router-dom';

import { getAll } from '../../api/objectCat.js';

import './LostAndFound.css'


const img = [
    keyImage, bicicleImage,
    bagImage, creditCardImage,
    electronicsImage, joyasImage,
    telephoneImage, clothesImage,
    otherImage];

function LostAndFound() {
    const [objCat, setData] = useState([]);

    useEffect(() => {
        handleFetchData();
    }, []);

    const handleFetchData = async () => {
        setData(await getAll());
    }

    console.log(objCat);
    return (
        <div className="my-section">
            {objCat && objCat.map(object => (
                <div key={object.object_category_id} >
                    <NavLink className="my-navlink-section"
                        to={"/es/ciudad/objetosPerdidos/" + object.object_category_id}
                    >
                        <img src={img[object.object_category_id - 1]}
                            className="logo" alt={"Alt: " + object.name} />
                        <p>{object.name}</p>
                    </NavLink>
                    


                </div>
            ))}

        </div>
    )
}


export default LostAndFound;
