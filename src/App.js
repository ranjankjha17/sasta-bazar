import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import ProductDetail from './components/ProductDetail';
import ProductList from './ProductList';
import { loadCartFromStorage } from './productsSlice';
import ProductSearch from './components/ProductSearch';
import Signup from './Registration/Signup';
import Login from './Registration/Login';
import Dashboard from './Registration/Dashboard';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartFromStorage()); // Load cart data from local storage
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/product" element={<ProductDetail/>}/>
        <Route exact path="/search" element={<ProductSearch/>}/>
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
