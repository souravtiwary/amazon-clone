import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Checkout() {
  // pull basket
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <Link to="/">
          <img
            className="checkout_ad"
            src="https://m.media-amazon.com/images/G/31/shazam/970x250-2-HKTRv._V408429399_.jpg"
            alt="CART"
          />
        </Link>
        {basket?.length === 0 ? (
          <div className="checkout_empty">
            <h2>Your Basket is EMPTY</h2>
            <Link to="/">
              <h1>Buy Something?</h1>
            </Link>
          </div>
        ) : (
          <div className="checkout_title">
            <h2>Your Shopping Basket...</h2>
            {/* list of all the product */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
          <h1>Subtotal</h1>
        </div>
      )}
    </div>
  );
}

export default Checkout;
