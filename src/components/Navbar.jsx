import React, { useState } from 'react';
import { Logo } from '../imports';
import { RiMenuFill, RiCloseFill  } from "react-icons/ri";

const LinksList = () => (
  <>
    <a href="#features">Features</a>
    <a href="#pricing">Pricing</a>
    <a href="#resources">Pricing</a>
  </>
);

const Login = () => (
  <>
    <a href="#/">Login</a>
    <button type="button">Sign Up</button>
  </>
);

const Navbar = () => {
  const [menuTog, setTog] = useState(false);
  
  return (
    <div className="url-shortening__navbar">
      <div className="url-shortening__navbar-logo">
        <img src={ Logo } alt="Logo" />   
      </div>
      <div className="url-shortening__navbar-links">
        <LinksList />
      </div>
      <div className="url-shortening__navbar-login">
        <Login />
      </div>
      <div className="url-shortening__navbar-menu">
        {!menuTog && <RiMenuFill size={27} onClick={ () => setTog(true)} />}
        {menuTog && <RiCloseFill size={27} onClick={ () => setTog(false)} />}
        {menuTog && (
          <div className="url-shortening__navbar-menu_container scale-up-ver-top">
            <div className="url-shortening__navbar-menu_container-links">
              <div className="url-shortening__navbar-menu_container-links-list">
                <LinksList />
              </div>
              <div className="url-shortening__navbar-menu_container-links-login">
                <Login />
              </div>
            </div>
          </div>
        )}      
      </div>
    </div>
  );
}

export default Navbar;
