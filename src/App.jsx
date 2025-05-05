import { useState } from 'react';

import RouteContext from "./content/routeContext.jsx"

//COMPONENTS
import Header from "./components/header/Header.jsx"
import LostAndFound from './components/lostAndFound/LostAndFound.jsx'
import LostList from "./components/lostList/LostList.jsx"
import Home from "./components/home/Home.jsx"
//CSS
import './App.css'


const routes = {
  home: <Home />,
  services: <h1>Trámites y Servicios</h1>,
  city:
    <>
      <h1>Ciudad</h1>
    </>,
  cityHall: <h1>Ayuntamiento</h1>,
  turism: <h1>Turismo</h1>,
  calendar: <h1>Agenda 2030</h1>,
  lostAndFound: <LostAndFound />,
  lostList1: <LostList category_id={"1"} />,
  lostList2: <LostList category_id={"2"} />,
  lostList3: <LostList category_id={"3"} />
}

function App() {
  const [route, setRoute] = useState("home");

  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  }
  return (
    <>
      <RouteContext value={{ route: route, onRouteChange: handleRouteChange }}>
        <Header route={route} />
        {route != "city" ? routes[route] :
          <>
            {routes[route]}
            <a onClick={() => handleRouteChange("lostAndFound")}>Objetos perdidos</a>
          </>}
      </RouteContext>
    </>
  )
}


export default App
