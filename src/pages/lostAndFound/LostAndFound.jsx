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
import Button from "../../components/button/Button.jsx"

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

    const myStyle = {
        backgroundImage:
            "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    };
    return (
        <div className="lostCategoryBlock">
            {objCat && objCat.map(object => (
                <div className="lostCategoryBlock__div" key={object.object_category_id} >
                    <NavLink className="lostCategoryBlock_link"
                        to={"/es/ciudad/objetosPerdidos/op/" + object.object_category_id}
                    >
                        <div className='lostCategoryBlock__container'>
                            <Button classNames="button lostCategoryBlock__button" 
                            styles={{backgroundImage: `url(${img[object.object_category_id - 1]})`,
                            backgroundRepeat: `no-repeat`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`}
                            }>
                              
                            </Button>
                            <p className='lostCategoryBlock__p'>{object.name}</p>

                        </div>

                    </NavLink>



                </div>
            ))}

        </div>
    )
}


export default LostAndFound;
