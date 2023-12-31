import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './components/Product'
import { setSortBy } from './productsSlice'
import Banner from './components/Banner'
import Navbars from './components/Navbar'
import Footer from './components/Footer'
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
            <div className='d-flex justify-content-center align-items-center' style={{ marginTop: "12rem" }}>
                <div class="spinner-grow" style={{ height: "7rem", width: "7rem", backgroundColor: "#d63384" }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='row'>
                <Navbars setSearchTerm={setSearchTerm} />
            </div>
            <div className='row'>
                <div className='col-lg-12 col-xl-12 col-xxl-12'>
                    <Banner />
                </div>
            </div>
            {/* <div className='row'>
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
            </div> */}

            <div className='row'>
                <div className="mt-4 d-flex flex-wrap justify-content-center product-list">
                    {
                        filteredProducts.slice(0, 8).map((e) => {
                            return (

                                <Product {...e} key={e.id} />
                            )
                        }

                        )
                    }

                </div>

            </div>
            <div className='row'>
                <img
                    className="hidden md:block md:col-span-full hero-banner-2"
                    src="https://bit.ly/2Zekxt8"
                    alt="advar"
                />
            </div>
            <div className='row'>
                <div className="mt-4 d-flex flex-wrap justify-content-center product-list product-list-2">
                    {
                        filteredProducts.slice(8, filteredProducts.length).map((e) => {
                            return (

                                <Product {...e} key={e.id} />
                            )
                        }

                        )
                    }

                </div>

            </div>
            <div className='row'>
                <Footer />
            </div>
        </>
    )
}

export default ProductList