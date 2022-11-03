
import AppContainer from "../components/ItemContainer";
import Banner from "../components/Banner"
import ItemListcontaimer from "../components/ItemListContainer"
import "../styles.css/styles.scss";
import { UserLayout } from "../components/UserLayout";


export const Home = () => { 

return ( 

<>


      
<Banner promocion="Unete al club de descuentos" boton = "registrate"></Banner>



<main className='content'>

  <AppContainer/>

</main>
<Banner promocion="Aprovecha las mejores Promociones" boton ="unete"></Banner>

{/* <Button leftIcon={<AifillCarryOut/>} rightIcon = {<AifillCarryOut/>}>haz algo</Button>  */}



</>

);
 }