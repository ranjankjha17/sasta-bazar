import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import {  clearCart } from './productsSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase.js';


const PaymentForm = ({totalPrice}) => {

  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

const handlePayment = async () => {
    console.log("here...");
    const res = await initializeRazorpay();
  
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    var options = {
      key: "rzp_test_gHZL1DUFBuxb7q", // Enter the Key ID generated from the Dashboard
      name: "Amazon Pvt Ltd",
      currency: "USD",
      amount: totalPrice*100,
      // order_id: "1001",
      description: "Thankyou for Purchase",
      image: "https://levrose.com/wp-content/uploads/2020/08/amazon.jpg",
      handler: function (response) {
        alert('Payment Successful!');       
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        dispatch(clearCart());
      },
      prefill: {
        name: name,
        email: email,
        contact:phone,
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);
  
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
  
      document.body.appendChild(script);
    });
  };
 

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Payment Form</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handlePayment}>Pay ${totalPrice}</button>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>
    </div>
  );
};

export default PaymentForm;
