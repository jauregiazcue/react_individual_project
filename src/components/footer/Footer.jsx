import zarautzLogo from "../../assets/logo.png"
import './Footer.css'

function Footer() {

  return (
    <footer className="footer">
      <img src={zarautzLogo} className="footer__img" alt="Zarautz Logo" />
      <ul className='footer__ul'>
        <li>
          <p>Emergencias · 112</p>
        </li>
        <li>
          <p>Policía Municipal · 943 005 115</p>
        </li>
        <li>
          <p>Información Municipal · 943 005 100</p>
        </li>
        <li>
          <p>Información Municipal desde Zarautz · 010</p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer; 