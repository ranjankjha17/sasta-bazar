import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const products = useSelector(state => state.product.products);
  const itemCount = products.reduce((total, product) => total + product.quantity, 0);
  console.log(itemCount)
  const navigate = useNavigate()
  return (
    <div className="cart-icon d-flex align-items-right justify-conent-right  mt-1">
      <button type="button" class="btn btn-secondary position-relative" onClick={() => navigate('/cart')} style={{backgroundColor:"#d63384",color:"#ffffff"}}>
      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
        {itemCount}
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>

  );
};

export default CartIcon;
