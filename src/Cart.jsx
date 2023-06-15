import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import { decrementQuantity, incrementQuantity, removeFromCart } from './productsSlice';
import { auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Registration/Login';
import Logout from './Registration/Logout';
const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.products);
  console.log(products)
  let totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);
  totalPrice = Math.round((totalPrice + Number.EPSILON) * 100) / 100
  console.log(totalPrice)
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <>
      <div className="container mt-4">
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}><FontAwesomeIcon icon={faBackward} /></button>
         <h1 className="mb-4">Shopping Cart</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>

                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <div className="btn-group" role="group" aria-label="Quantity">
                    <button type="button" className="btn btn-secondary" onClick={() => dispatch(decrementQuantity(product))}>-</button>
                    <span className="btn btn-outline-secondary">{product.quantity}</span>
                    <button type="button" className="btn btn-secondary" onClick={() => dispatch(incrementQuantity(product))}>+</button>
                  </div>
                </td>
                <td>${product.price * product.quantity}</td>
                <td><button className="btn btn-danger" onClick={() => dispatch(removeFromCart(product))}>Remove</button></td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><strong>Total: ${totalPrice}</strong></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='d-flex justify-content-center'>
        {user ?
          (
            <div>
              <PaymentForm totalPrice={totalPrice} />
              <p>Welcome, {user.email}!</p>
              <Logout />
            </div>
          )
          :
          (<Login />
          )}
      </div>
    </>
  )
}

export default Cart