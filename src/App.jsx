import { useState } from 'react';

//ASSETS
import keyImage from './assets/key.jpg'
import bagImage from './assets/bag.jpg'
import bicicleImage from './assets/bicicle.jpg'
import clothesImage from './assets/clothes.jpg'

import creditCardImage from './assets/creditCard.jpg'
import electronicsImage from './assets/electronics.jpg'
import joyasImage from './assets/joyas.jpg'

import otherImage from './assets/other.jpg'
import telephoneImage from './assets/telephones.jpg'

//COMPONENTS
import Header from "./components/header/Header.jsx"
import LostAndFound from './components/lostAndFound/LostAndFound.jsx'
import LostList from "./components/lostList/LostList.jsx"
import Home from "./components/home/Home.jsx"
//CSS
import './App.css'


const routes = {
  home: <Home/>,
  services: <h1>Trámites y Servicios</h1>,
  city:
    <>
      <h1>Ciudad</h1>
    </>,
  cityHall: <h1>Ayuntamiento</h1>,
  turism: <h1>Turismo</h1>,
  calendar: <h1>Agenda 2030</h1>,
  lostAndFound: <LostAndFound myItem={[
    { image: keyImage, text: "Llaves" }, { image: bicicleImage, text: "Bicicletas" },
    { image: bagImage, text: "Bolsos/Carteras" }, { image: creditCardImage, text: "Documentacion\nTarjetas" },
    { image: electronicsImage, text: "Electrónica" }, { image: joyasImage, text: "Joyas" },
    { image: telephoneImage, text: "Telefonos" }, { image: clothesImage, text: "Ropa" },
    { image: otherImage, text: "Otros" }]} />,
  lostList: <LostList />
}

function App() {
  const [route, setRoute] = useState("lostList");

  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  }
  return (
    <>
      <Header route={route} onRouteChange={handleRouteChange} />
      {route != "city" ? routes[route] :
        <>
          {routes[route]}
          <a onClick={() => handleRouteChange("lostAndFound")}>Objetos perdidos</a>
        </>}
    </>
  )
}


export default App
