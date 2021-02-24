import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='Platzi Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link to='/'>Cuenta</Link></li>
        <li><Link to='/'>Cerrar Sesión</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
