// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import Root from "./Root.jsx"
import Home from "../home/Home.jsx"
import LostAndFound from '../lostAndFound/LostAndFound.jsx'
import LostList from '../../components/lostList/LostList.jsx';

// Definimos nuestras rutas
const router = createBrowserRouter([
    {
        path: "/", 
        element: <Root />,
        children: [
            { path: "", element: <Home /> },
            { path: "/es/servicio", element: <h1>Trámites y Servicios</h1> },
            { path: "/es/ayuntamiento", element: <h1>Ayuntamiento</h1> },
            { path: "/es/turismo", element: <h1>Turismo</h1> },
            { path: "/es/agenda2030", element: <h1>Agenda 2030</h1> },
            { path: "/es/ciudad", element: <h1>Ciudad</h1> },
            { path: "/es/ciudad/objetosPerdidos", element: <LostAndFound /> },
            { path: "/es/ciudad/objetosPerdidos/:id", element: <LostList /> },
        ],
    },
]);

export default router;