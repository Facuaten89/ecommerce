

import {Link,NavLink } from "react-router-dom";
import "../styles.css/Navbar.scss"

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartContext } from "../Context/cartContext";

const links = ["malbec","blanco","cabernet","syrah"]


export const Navbar = () => {
  const { cart, getCartQty } = useCartContext();
  console.log({ cart });
  return (
    <header className="navbar">


 
  <Link to="/">

<img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2j9geciG9WQBkI2QBgcISLrantD3Kad_TQ&usqp=CAU"} className="header__logo" alt="logo"/>

</Link>

<div className="navbar__nav">
        {links.map((elemento) => {
          return (
            <NavLink
              className={({isActive}) => (isActive ? "navbar__link navbar__link--active" : "navbar__link")}
              to={`/category/${elemento.toLowerCase()}`}
              key={elemento}
            >
              {elemento}
            </NavLink>
          );
        })}
      </div>
      <Link to="/cart" className="navbar__cart">
        <AiOutlineShoppingCart />{" "}
        <span className="navbar__cart-qty">{getCartQty()}</span>
      </Link>
</header> 
  )
}

