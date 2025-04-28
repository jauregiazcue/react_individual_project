import keyImage from './assets/key.jpg'
import bagImage from './assets/bag.jpg'
import bicicleImage from './assets/bicicle.jpg'
import clothesImage from './assets/clothes.jpg'

import creditCardImage from './assets/creditCard.jpg'
import electronicsImage from './assets/electronics.jpg'
import joyasImage from './assets/joyas.jpg'

import otherImage from './assets/other.jpg'
import telephoneImage from './assets/telephones.jpg'

import Header from "./components/header/Header.jsx"
import LostAndFound from './components/lostAndFound/lostAndFound.jsx'

import './App.css'

function App() {
  return (
    <>
      <Header/>
      <LostAndFound myItem={[
        {image:keyImage,text:"Llaves"},{image:bicicleImage,text:"Bicicletas"},
        {image:bagImage,text:"Bolsos/Carteras"},{image:creditCardImage,text:"Documentacion/Tarjetas/Dinero"},
        {image:electronicsImage,text:"Electrónica"},{image:joyasImage,text:"Joyas"},
        {image:telephoneImage,text:"Telefonos"},{image:clothesImage,text:"Ropa"},
        {image:otherImage,text:"Otros"}]}/>
    </>
  )
}


export default App
