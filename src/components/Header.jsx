
import React, { useState } from 'react';
import  {X, AlignJustify } from 'lucide-react'
import logo from '../assets/logo.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>


<header className="bg-blue py-2">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a href="#home" className="text-white text-decoration-none fs-3 fw-bold">
            <img src={logo} alt="" width={"100px"} />
        </a>

        {/* Hamburger Icon */}
        <button
          className="btn text-light  d-lg-none"
          onClick={toggleMenu}
        >
      {isOpen?<X/>:<AlignJustify/>
      }
        </button>

        {/* Desktop Menu */}
        <ul className="d-none d-lg-flex list-unstyled m-0 gap-4">
          <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
          <li><a href="#about" className="text-white text-decoration-none">About</a></li>
          <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
          <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="container mt-3 d-lg-none">
          <ul className="list-unstyled">
            <li className="mb-2"><a href="#home" className="text-white text-decoration-none" onClick={toggleMenu}>Home</a></li>
            <li className="mb-2"><a href="#about" className="text-white text-decoration-none" onClick={toggleMenu}>About</a></li>
            <li className="mb-2"><a href="#services" className="text-white text-decoration-none" onClick={toggleMenu}>Services</a></li>
            <li className="mb-2"><a href="#contact" className="text-white text-decoration-none" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  
    </div>
  )
}

export default Header