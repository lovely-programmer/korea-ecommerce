"use client";
import { useState } from "react";
import Link from "next/link";
import Search from "@/svg/Search";
import Cart from "@/svg/Cart";
import Close from "@/svg/Close";
import ShoppingCart from "@/svg/ShoppingCart";
import Minus from "@/svg/Minus";
import Add from "@/svg/Add";
import Menu from "@/svg/Menu";

export default function Navbar({ setCart, cart }) {
  const [open, setOpen] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIncrease = (index, priceId) => {
    let element = document.getElementById(index);
    let value = element.innerHTML;
    // const priceElement = document.getElementById(priceId);
    // const priceValue = priceElement.innerHTML;
    ++value;
    document.getElementById(index).innerHTML = value;
    // document.getElementById(priceId).innerHTML = priceValue * value;
  };

  const handleDecrease = (index, priceId) => {
    let element = document.getElementById(index);
    let value = element.innerHTML;
    // let priceElement = document.getElementById(priceId);
    // const priceValue = priceElement.innerHTML;

    if (value > 1) --value;
    document.getElementById(index).innerHTML = value;
    // document.getElementById(priceId).innerHTML = priceValue * value;
  };

  const removeFromCart = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + Number(item.price),
    0,
  );

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <div
          className="navbar-menu navbar-icon"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu />
        </div>
        {isMenuOpen && (
          <div className="cart-item navbar-menu-item">
            <div className="cart-item-container navbar-menu-container">
              <div className="navbar-icon" onClick={() => setIsMenuOpen(false)}>
                <Close />
              </div>
              <div className="navbar-search rounded-md">
                <input
                  className="text-sm"
                  type="text"
                  placeholder="Search for products..."
                />
                <Search />
              </div>
              <div className="navbar-menu-list">
                <Link href="">All</Link>
                <Link href="">Trending</Link>
                <Link href="">Dresses</Link>
              </div>
            </div>
          </div>
        )}
        <div className="navbar-logo text-sm">ACME STORE</div>
        <div className="navbar-list">
          <Link href="">All</Link>
          <Link href="">Trending</Link>
          <Link href="">Dresses</Link>
        </div>
      </div>
      <div className="navbar-search rounded-md">
        <input
          className="text-sm"
          type="text"
          placeholder="Search for products..."
        />
        <Search />
      </div>
      <div className="navbar-cart" onClick={() => setOpen(true)}>
        <div className="navbar-icon rounded-md">
          <Cart />
        </div>
      </div>

      {open && (
        <div className="cart-item">
          <div className="cart-item-container">
            <div className="cart-header">
              <p className="text-lg font-semibold">My Cart</p>
              <div className="navbar-cart-icon" onClick={() => setOpen(false)}>
                <Close />
              </div>
            </div>
            <div className="cart-item-content">
              {cart.length === 0 ? (
                <div className="shopping-cart">
                  <ShoppingCart />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="shopping">
                  <div className="shopping-content">
                    {cart.map((item, index) => (
                      <div key={index} className="shopping-cart-items">
                        <div className="shopping-cart-item">
                          <div className="item-img">
                            <img src={item.img} alt="image" />
                          </div>
                          <div
                            onClick={() => removeFromCart(item.name)}
                            className="remove-cart"
                          >
                            <Close />
                          </div>
                        </div>
                        <p>{item.name}</p>
                        <div className="cart-price">
                          <p className="text-sm">
                            $<span id={`price${index}`}>{item.price}</span> .00
                            USD
                          </p>
                          {/*<div className="cart-update">*/}
                          {/*  <div*/}
                          {/*    onClick={() =>*/}
                          {/*      handleDecrease(index, `price${index}`)*/}
                          {/*    }*/}
                          {/*  >*/}
                          {/*    <Minus />*/}
                          {/*  </div>*/}
                          {/*  <div id={`${index}`}>{item.orderQuantity}</div>*/}
                          {/*  <div*/}
                          {/*    onClick={() =>*/}
                          {/*      handleIncrease(index, `price${index}`)*/}
                          {/*    }*/}
                          {/*  >*/}
                          {/*    <Add />*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="checkout">
                    <div className="checkout-item">
                      <p className="checkout-">Taxes</p>
                      <p className="checkout-item-white">$0.00 USD</p>
                    </div>
                    <div className="checkout-item">
                      <p>Shipping</p>
                      <p>Calculated at checkout</p>
                    </div>
                    <div className="checkout-item">
                      <p>Total</p>
                      <p className="checkout-item-white">
                        ${totalAmount}.00 USD
                      </p>
                    </div>
                    <div className="checkout-button" onClick={clearCart}>
                      <Link href="/management">
                        <button className="text-sm">Proceed to Checkout</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
