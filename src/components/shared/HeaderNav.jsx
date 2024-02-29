import React from 'react';
import { Link } from 'react-router-dom';
import './styles/headerNav.css';

const HeaderNav = () => {
  return (
    <div className='headerNav'>
        <h1><Link to='/'>Electro-Market</Link></h1>
        <nav>
          <ul className='headerNav__list'>
            <li><Link to='/login'><box-icon name='user-circle'></box-icon></Link></li>
            <li><Link to='/purchases'><box-icon type='solid' name='shopping-bags'></box-icon></Link></li>
            <li><Link to='/cart'><box-icon name='cart-add'></box-icon></Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default HeaderNav;