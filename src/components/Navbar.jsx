
import CartWidger from "./CartWidger"
import { Button } from 'react-bootstrap';

const Navbar = () =>{
return  <header className="header">
<img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2j9geciG9WQBkI2QBgcISLrantD3Kad_TQ&usqp=CAU"} className="header__logo" alt="logo"/>

<div className='header__nav'>

    <Button variant="outline-danger" size="lg">Inicio</Button>{' '}
    <Button variant="outline-danger" size="lg">Promociones</Button>{' '}
    <Button variant="outline-danger" size="lg">Ubicacion</Button>{' '}
    <Button variant="outline-danger" size="lg">Quienes somos</Button>{' '}
  
  
   </div>
<div>

<CartWidger></CartWidger>
</div>

</header> 
}

export default Navbar