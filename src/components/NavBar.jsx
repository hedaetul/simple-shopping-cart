import { ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className='links'>
        <Link to='/'>Shop</Link>
        <Link to='/cart'>
          <ShoppingCart size={32} />{' '}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
