import Item from "./item";

const AppContainer = () =>{
return <div className='products'>
<Item
nombre = "Las Perdices"
categoria = "malbec"
tag = "6 unidades"
precio ={"$4500"}
imagen = "https://http2.mlstatic.com/D_NQ_NP_894765-MLA45169793835_032021-O.webp"/>

<Item
nombre = "cordero piel de lobo"
categoria = "cabernet"
tag = "6 unidades"
precio ={"$3400"}
imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_33wIriJWLwITsmtRPLaXiw_iDsk8IGf-Q&usqp=CAU"/>

<Item
nombre = "norton cosecha tardia"
categoria = "blanco dulce"
tag = "6 unidades"
precio ={"$2600"}
imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7EpW-LGBbcizhRhm_xtyDZzTq7ygMiny7A&usqp=CAU"/>

<Item
nombre = "Trapiche reserva"
categoria = "cavernet"
tag = "6 unidades"
precio ={"$7500"}
imagen = "https://http2.mlstatic.com/D_NQ_NP_605537-MLA43033131303_082020-O.jpg"/>

</div>

}

export default AppContainer