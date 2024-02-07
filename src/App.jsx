import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ShopContextProvider from './context/ShopContext';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';

const App = () => {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
