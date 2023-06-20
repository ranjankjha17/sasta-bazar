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
    <div>   
      <div className="d-flex flex-column m-1  z-20 border border-1 rounded-3 shadow-md shadow-lg p-5 mb-5 bg-body rounded" style={{ width: "25rem", height: "38rem"}}>
      <Link to="/product" state={{ item: {...props} }}>
          <img src={image} className="card-img-top rounded mx-auto d-block" alt={title} style={{ width: "12rem", height: "15rem",objectFit:"contain" }} />
        </Link>
        <span className='mb-3 mt-3' style={{color:"#1a1a2c",backgroundColor:"#1a1a2c0d"}}>{category}</span>
        <div className="card-body">
          <h3 className="text-lg font-bold h-14 mb-3 text-truncate">{title}</h3>
          <p className='mb-3 text-sm text-truncate'>{description}</p>
          <div className='d-flex justify-content-between'>
          <h3 className="card-text">${price}</h3>
          <span className="rating star-fill fw-bold" style={{ color: "yellow" }}>*<span className='fs-4 fw-normal' style={{color:"#000"}}>{rating.rate}<span className='ffw-light text-muted fs-6'>({rating.count})</span></span></span>
          </div>
          <button onClick={handleAddToCart} className="btn btn-light btn-lg w-100 " style={{backgroundColor:"#d63384",color:"#ffffff"}}>ADD</button>
        </div>
      </div>

    </div>
  )
}

export default Product