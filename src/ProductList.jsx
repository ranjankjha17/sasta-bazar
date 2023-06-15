import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartIcon from './components/CartIcon'
import Product from './components/Product'
import { setSortBy } from './productsSlice'
const ProductList = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [productList, setProductList] = useState([])

    const [searchTerm, setSearchTerm] = useState("");

    const dispatch = useDispatch()
    const { sortBy } = useSelector((state) => state.product);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const product = await axios.get("https://fakestoreapi.com/products")

                setProductList(product.data)
                setIsLoading(false);
            } catch (error) {
                console.log(error)
                setIsLoading(false);
            }
        }

        fetchProducts()
    }, [dispatch])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = productList
    .filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
        if (sortBy === '') {
          return 0;
        }
        switch (sortBy) {
          case 'priceAsc':
            return a.price - b.price;
          case 'priceDesc':
            return b.price - a.price;
          case 'nameAsc':
            return a.title.localeCompare(b.title);
          case 'nameDesc':
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      })

    const handleSortByChange = (e) => {
        dispatch(setSortBy(e.target.value));
      };

    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{marginTop:"12rem"}}>

            
            <div class="spinner-grow" style={{ height: "15rem", width: "15rem",backgroundColor:"#d63384"}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>
        )
    }
    return (
        <>
            <div className='d-flex row justify-content-between' style={{ paddingRight: "0.5rem" }}>


                <div className='col-lg-4'>
                    <h2>Sasta Bazar</h2>
                </div>
                <div className='col-lg-4'>
                    <input
                        type="text"
                        className="form-control"
                        style={{ borderColor: "#d63384" }}
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder='search product'
                    />
                </div>
                <div className='col-lg-4 mt-1' style={{ justifyContent: "end", display: "flex" }}>
                    <CartIcon/>
                </div>




            </div>

            <div className='row'>
                <div>
                    <label htmlFor="sortBy">Sort By:</label>
                    <select
                        id="sortBy"
                        value={sortBy}
                        onChange={handleSortByChange}
                    >
                        <option value="">Default</option>
                        <option value="priceAsc">Price - Low to High</option>
                        <option value="priceDesc">Price - High to Low</option>
                        <option value="nameAsc">Name - A to Z</option>
                        <option value="nameDesc">Name - Z to A</option>
                    </select>
                </div>
            </div>

            <div >
                <div className="mt-4 d-flex flex-wrap justify-content-start">
                    {
                        filteredProducts.map((e) => {
                            return (

                                <Product {...e} key={e.id} />
                            )
                        }

                        )
                    }

                </div>
            </div>


        </>
    )
}

export default ProductList