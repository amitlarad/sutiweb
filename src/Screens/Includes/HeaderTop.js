import React from "react";
import {Link} from 'react-router-dom';

function HeaderTop() {
  return (
    <div className="layout-container">
      <div className="layout-flex">
        <div className="currencyContainer">
          <select className="currency demi-bold">
            <option value="INR">INR</option>
            <option value="AUD">AUD</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="HKD">HKD</option>
            <option value="SGD">SGD</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <div className="DownBlackArrow"></div>
        </div>
        <div className="Logo cursor-pointer">
          <Link to="/">
            <img src="/images/web-suti-logo.png" alt="Logo"/>
          </Link>
        </div>
        <div className="flex-action-header">
          <div className="action-header">
            <button
              className="prel btn-icon"
              data-toggle="modal"
              data-target="#search-product-categories"
            >
              <img src="/images/explore_v2.svg" align="explore_v2"  alt=""/>
            </button>
            <button
              className="prel btn-icon"
              data-toggle="modal"
              data-target="#login-site"
            >
              <img src="/images/wishlist_v2.svg" align="wishlist_v2" alt=""/>
            </button>
            <button
              className="prel btn-icon"
              data-toggle="modal"
              data-target="#login-site"
            >
              <img src="/images/account_v2.svg" align="account_v2"  alt=""/>
            </button>
            <button className="prel btn-icon cart-icon">
              <img src="/images/cart_v2.svg" align="cart_v2"  alt=""/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
