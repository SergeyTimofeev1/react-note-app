import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg px-3">
      <div className="navbar-brand">
        Note App
      </div>

      <ul className="navbar-nav">
        <li className='nav-item'>
          <Link
            className="nav-link"
            to='/home'
          >
            Главная
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to='/about'
          >
            Информация
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
