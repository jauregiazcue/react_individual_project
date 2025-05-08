// pages/Root.jsx

import Header from "../../components/header/Header.jsx"
import { Outlet } from 'react-router-dom';
import './App.css'
function Root() {
  return (
    <div>
      <Header />

      <main className="main">
        
        <Outlet />
      </main>

      <footer className="footer">© 2025 Mi App</footer>
    </div>
  );
}

export default Root;