import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  // pulling or pushing item from the basket is done using dispatch
  const [{ basket }, dispatch] = useStateValue();
  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      {/* Search box */}
      <div className="header_search">
        <input className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 3 links on right */}
      <div className="header_nav">
        {/* 1st Link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="lineone">Hello, </span>
            <span className="linetwo">Sign In</span>
          </div>
        </Link>

        {/* 2st Link */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="lineone">Return, </span>
            <span className="linetwo">& Orders</span>
          </div>
        </Link>

        {/* 3st Link */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="lineone">Your </span>
            <span className="linetwo">Prime</span>
          </div>
        </Link>

        {/* 4st Link */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            {/* Shopping basket icon */}
            <ShoppingBasketIcon className="basket" />
            {/* Number of items in the basket */}
            {/* use ? with basket bcoz when the button is press property if the basket changes */}
            <span className="linetwo header_basketcount">{basket?.length}</span>
          </div>
        </Link>
      </div>

      {/* Basket icon with number */}
    </nav>
  );
}

export default Header;
