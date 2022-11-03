
import CartWidger from "./CartWidger"
import { Button } from 'react-bootstrap';
import {Link,NavLink } from "react-router-dom";
import "../styles.css/Navbar.scss"

const links = ["malbec","blanco","cabernet","syrah"]


const Navbar = () =>{
return  <header className="header">
 
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
      <div className="header__buttons">
        <CartWidger></CartWidger>
        <Link to="/cart">Carrito</Link>
      </div>

</header> 
}

export default Navbar