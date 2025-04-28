import keyImage from './assets/key.jpg'
import Header from "./components/header/Header.jsx"
import Button from './components/button/Button.jsx'

import './App.css'



function App() {
  return (
    <>
      <Header/>
      <div className="card">
        <Button>
          <img src={keyImage} className="logo" alt="Key" />
        </Button>
      </div>
    </>
  )
}

export default App
