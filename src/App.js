
import AppContainer from "./components/AppContainer";
import Item from "./components/item"
import Button from "./components/Button"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import ItemListcontaimer from "./components/ItemListContainer"
import "./styles.css/styles.scss";


function App() {
  return (
    <div className="App">

<Navbar></Navbar>

<ItemListcontaimer greeting></ItemListcontaimer>
      
<Banner promocion="Unete al club de descuentos" boton = "registrate"></Banner>



<main className='content'>

  <AppContainer/>

</main>
<Banner promocion="Aprovecha las mejores Promociones" boton ="unete"></Banner>

<Footer></Footer>
</div>
  );
 }

export default App;
