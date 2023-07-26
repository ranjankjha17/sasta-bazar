import { useState } from "react";
import CartIcon from "./CartIcon";
import "./styles/navbar.css"
const Navbars = ({setSearchTerm}) => {
    const [searchText, setSearchText] = useState("");
    const handleSearch = (event) => {
        setSearchText(event.target.value);
        setSearchTerm(searchText);
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href=" #">Sasta Bazar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div class="d-flex mx-auto">
                            <input class="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            style={{ borderColor: "#d63384" }}
                            value={searchText}
                            onChange={handleSearch} />
                        </div>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=" /">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=" #">Mobiles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=" #">Computers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=" #">Electronics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=" #">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=" #">Coupons</a>
                            </li>
                        </ul>                        
                        <CartIcon/>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbars;