import React from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../productsSlice'
import CartIcon from './CartIcon';
const ProductDetail = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { item } = location.state
    console.log(item)
   
    return (
        <div className='row m-3'>
            <div className="card mb-3 col-lg-8">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.image} className="img-fluid rounded-start" alt={item.title} style={{ height: '30rem' }} />
                    </div>
                    <div className="col-md-8" style={{ marginTop: "5rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text mt-5">{item.description}</p>
                            <div className="rating mt-5" style={{ fontSize: "2rem" }}>
                                <span className="star-fill" style={{ color: "gold" }}>*</span>
                                <span className="star-fill" style={{ color: "gold" }}>*</span>
                                <span className="star-fill" style={{ color: "gold" }}>*</span>
                                <span className="star-half" style={{ color: "gold" }}>*</span>
                                <span className="star-half" style={{ color: "gold" }}>*</span>
                                <span className="">{item.rating.rate}</span>
                            </div>
                            <h5 className="card-text mt-3">Price${item.price}</h5>
                            <button onClick={()=> dispatch(addToCart(item))} className="btn btn-light btn-lg mt-5" style={{backgroundColor:"#d63384",color:"#ffffff"}}>Add To Cart</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='col-lg-4 h-25' style={{justifyContent:"end",display:"flex",paddingRight:"2rem"}}>
            <CartIcon/>
            </div>
            
        </div>
    )
}

export default ProductDetail