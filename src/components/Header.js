import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
    const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
    const [cartDropdownOpen, setCartDropdownOpen] = useState(false);

    const navigate = useNavigate();

    const toggleMenuDropdown = () => {
        setMenuDropdownOpen(!menuDropdownOpen);
    };

    const toggleLoginDropdown = () => {
        setLoginDropdownOpen(!loginDropdownOpen);
    };

    const toggleCartDropdown = () => {
        setCartDropdownOpen(!cartDropdownOpen);
    };

    const handleMyOrdersClick = () => {
        navigate("/orders"); // Update the path to your orders page
    };

    const handleHomeClick = () => {
        navigate("/"); // Navigate to home page
    };

    return (
        <div className="Icon">
            <div className="header">
                <LuMenu onClick={toggleMenuDropdown} />
                <button className="home-button" onClick={handleHomeClick}>
                    Home
                </button>
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
                    <button className="cart-button" onClick={toggleCartDropdown}>
                        Cart <AiOutlineShoppingCart className="icon" />
                    </button>
                    {cartDropdownOpen && (
                        <div className="cart-dropdown-menu">
                            <div className="dropdown-item">Cart Item 1</div>
                            <div className="dropdown-item">Cart Item 2</div>
                            <div className="dropdown-item">Cart Item 3</div>
                        </div>
                    )}
                </div>
                {menuDropdownOpen && (
                    <div className="dropdown-menu">
                        <div className="dropdown-item" onClick={handleMyOrdersClick}>
                            <h4>My Orders</h4>
                            <p>Fashion</p>
                        </div>
                        <div className="dropdown-item">
                            {/* <h4>New Collection</h4> */}
                        </div>
                        <div className="dropdown-item">
                            {/* <h4>Big Deals</h4> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
