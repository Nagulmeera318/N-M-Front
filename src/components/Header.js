import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import "./Header.css";

const Header = () => {
    return (
        <div className="Icon">
            <div className="header">
            <RiMenu2Fill />
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

export default Header;
