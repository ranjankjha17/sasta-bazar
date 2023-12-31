import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../productsSlice'

const Product = (props) => {
  const dispatch = useDispatch()
  const { title, price, image,category,description,rating } = props
  const handleAddToCart = () => {
    const item = { ...props }
    dispatch(addToCart(item))
  }
  return (
    <div className='product-card'>   
      <div className="d-flex flex-column m-2  z-20 border border-1 rounded-3 shadow-md shadow-lg p-5 mb-5 bg-body rounded">
      <Link to="/product" state={{ item: {...props} }}>
          <img src={image} className="card-img-top rounded mx-auto d-block" alt={title} style={{ width: "12rem", height: "15rem",objectFit:"contain" }} />
        </Link>
        <span className='mb-3 mt-3' style={{color:"#1a1a2c",backgroundColor:"#1a1a2c0d",fontSize:"0.75rem"}}>{category}</span>
        <div className="product-card-body">
          <h3 className="text-lg font-bold h-14 mb-3 text-truncate">{title}</h3>
          <p className='mb-3 text-sm text-truncate'>{description}</p>
          <div className='d-flex justify-content-between'>
          <div className="product-card-text">${price}</div>
          <span className="rating star-fill fw-bold" style={{ color: "#ffc107" }}>*<span className='fs-6 fw-normal' style={{color:"#000"}}>{rating.rate}<span className='ffw-light text-muted fs-6'>({rating.count})</span></span></span>
          </div>
          <button onClick={handleAddToCart} className="btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product