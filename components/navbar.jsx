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
import { usePathname } from "next/navigation";

export default function Navbar({ setCart, cart }) {
  const [open, setOpen] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
                <Link href="">{pathname === "/" ? "All" : "모두"}</Link>
                <Link href="">{pathname === "/" ? "Dresses" : "드레스"}</Link>
                <Link href="">
                  {pathname === "/" ? "Trending" : "인기 급상승"}
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="navbar-logo text-sm">ACME STORE</div>
        <div className="navbar-list">
          <Link href="">{pathname === "/" ? "All" : "모두"}</Link>
          <Link href="">{pathname === "/" ? "Dresses" : "드레스"}</Link>
          <Link href="">{pathname === "/" ? "Trending" : "인기 급상승"}</Link>
        </div>
      </div>
      <div className="navbar-search rounded-md">
        <input
          className="text-sm"
          type="text"
          placeholder={
            pathname === "/" ? "Search for products..." : "제품 검색..."
          }
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
              <p className="text-lg font-semibold">
                {pathname === "/" ? "My Cart" : "내 장바구니"}
              </p>
              <div className="navbar-cart-icon" onClick={() => setOpen(false)}>
                <Close />
              </div>
            </div>
            <div className="cart-item-content">
              {cart.length === 0 ? (
                <div className="shopping-cart">
                  <ShoppingCart />
                  <p>
                    {pathname === "/"
                      ? "Your cart is empty"
                      : "장바구니가 비어 있습니다."}
                  </p>
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
                            {pathname === "/" ? "$" : "₩"}
                            <span id={`price${index}`}>{item.price}</span>
                            {totalAmount} {pathname === "/" ? "USD" : "KRW"}
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
                      <p className="checkout-">
                        {pathname === "/" ? "Taxes" : "구실"}
                      </p>
                      <p className="checkout-item-white">
                        {pathname === "/" ? "$" : "₩"}0.00{" "}
                        {pathname === "/" ? "USD" : "KRW"}
                      </p>
                    </div>
                    <div className="checkout-item">
                      <p>{pathname === "/" ? "Shipping" : "해운"}</p>
                      <p>
                        {pathname === "/"
                          ? "Calculated at checkout"
                          : "결제 시 계산됨"}{" "}
                      </p>
                    </div>
                    <div className="checkout-item">
                      <p>{pathname === "/" ? "Total" : "총"}</p>
                      <p className="checkout-item-white">
                        {pathname === "/" ? "$" : "₩"}
                        {totalAmount} {pathname === "/" ? "USD" : "KRW"}
                      </p>
                    </div>
                    <div className="checkout-button" onClick={clearCart}>
                      <Link href="/management">
                        <button className="text-sm">
                          {pathname === "/"
                            ? "Proceed to Checkout"
                            : "결제로 진행"}{" "}
                        </button>
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
