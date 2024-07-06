import React from "react";
import { IoMdContact } from "react-icons/io";
import "./Products.css";

const Products = () => {
    return (
        <div className="Icon">
            <div className="header">
                <h1 className="heading">
                    Fashion
                </h1>
                <input type="text" className="search-bar" placeholder="Search products..." />
                <div className="auth-cart">
                    <button className="login-button">Login</button>
                    <button className="cart-button">Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Products;
