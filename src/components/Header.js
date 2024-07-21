import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleLoginDropdown = () => {
        setLoginDropdownOpen(!loginDropdownOpen);
    };

    return (
        <div className="Icon">
            <div className="header">
                <LuMenu onClick={toggleDropdown} />
                <h1 className="heading">Fashion</h1>
                <input type="text" className="search-bar" placeholder="Search products..." />
                <div className="auth-cart">
                    <div className="login-dropdown-container">
                        <button className="login-button" onClick={toggleLoginDropdown}>
                            Login <MdOutlineAccountCircle className="icon" />
                        </button>
                        {loginDropdownOpen && (
                            <div className="login-dropdown-menu">
                                <div className="dropdown-item">My Profile</div>
                                <div className="dropdown-item">Login</div>
                                <div className="dropdown-item">Signup</div>
                            </div>
                        )}
                    </div>
                    <button className="cart-button" onClick={toggleDropdown}>
                        Cart <AiOutlineShoppingCart className="icon" />
                    </button>
                </div>
                {dropdownOpen && (
                    <div className="dropdown-menu">
                        <div className="dropdown-item">
                            <h4>Trending</h4>
                            <p>Fashion</p>
                        </div>
                        <div className="dropdown-item">
                            <h4>New Collection</h4>
                        </div>
                        <div className="dropdown-item">
                            <h4>Big Deals</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
