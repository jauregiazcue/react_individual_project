import VerticalNav from "../../components/verticalNav/VerticalNav.jsx";
import './Home.css'

function Home() {
    return (

        <VerticalNav  myItem={[{
            text: "La web de Zarautz",
            newRoute: "https://www.zarautz.eus/es/inicio",
            target:"_blank"
        },
        {
            text: "Objetos Perdidos",
            newRoute: "es/ciudad/objetosPerdidos"
        }]
        } 
        articleClassName="home__article"
        navClassName= "page__nav--right ">

            <h1>Zarauzko Udala</h1>
            <p>Esta web es una web de prueba de lo que podria llegar a ser la web de Zarautz.</p>
            
        </VerticalNav>


    );
}

export default Home; 