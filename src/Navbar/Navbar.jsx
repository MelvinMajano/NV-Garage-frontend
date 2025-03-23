import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaGraduationCap, FaBlog, FaBook } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-logo">
          NV Garage
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className="navbar-link">
          <FaHome className="navbar-icon" />
          <span>Inicio</span>
        </NavLink>
        <NavLink to="/biblioteca" className="navbar-link">
          <FaBook className="navbar-icon" />
          <span>Biblioteca</span>
        </NavLink>
        <NavLink to="/programas" className="navbar-link">
          <FaGraduationCap className="navbar-icon" />
          <span>Programas</span>
        </NavLink>
        <NavLink to="/nvlearn" className="navbar-link">
          <FaGraduationCap className="navbar-icon" />
          <span>NV Learn</span>
        </NavLink>
        <NavLink to="/blog" className="navbar-link blog-link">
          <FaBlog className="navbar-icon" />
          <span>Blog</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;