import ContadorStock from "../components/contadorStock";

const products = [
    {
        nombre : "Las Perdices",
        tag : "6 unidades",
        precio :"4500" ,
        imagen : "https://http2.mlstatic.com/D_NQ_NP_894765-MLA45169793835_032021-O.webp",
        id :0,
        categoria : "malbec",
        stock:10,
},
   
{
    nombre : "cordero piel de lobo",
    tag : "6 unidades",
    precio : "3400",
    imagen : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_33wIriJWLwITsmtRPLaXiw_iDsk8IGf-Q&usqp=CAU",
    id:1,
    categoria : "cabernet",
    stock:10,
},
{
    
nombre : "norton cosecha tardia",
tag : "6 unidades",
precio : "2600",
imagen : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7EpW-LGBbcizhRhm_xtyDZzTq7ygMiny7A&usqp=CAU",
id: 2,
categoria : "blanco",
stock:10,
},

{
    nombre : "Catena Zapata",
    tag : "6 unidades",
    precio :"7500",
    imagen :"https://http2.mlstatic.com/D_NQ_NP_723678-MLA49421451938_032022-V.jpg",
    id:3,
    categoria : "cabernet",
    stock:10,
},
{
    nombre : "Trapiche reserva",
    tag : "6 unidades",
    precio :"7500",
    imagen :"https://http2.mlstatic.com/D_NQ_NP_605537-MLA43033131303_082020-O.jpg",
     id:4,
   categoria : "malbec",
   stock:10,
},
{
    nombre : "Ecoterra",
    tag : "6 unidades",
    precio :"7500",
    imagen :"https://d3ugyf2ht6aenh.cloudfront.net/stores/750/800/products/vino-blanco-dulce-chenin-ecoterra-organico-haarth-750ml-templeorganico-21-ae354a044410109e7c16602344816689-1024-1024.jpg",
     id:5,
      categoria : "blanco",
      stock:10,
},
{
    nombre : "Nieto senetiner",
    tag : "6 unidades",
    precio :"7500",
    imagen :"https://borrachines.com.ar/wp-content/uploads/2022/06/Nieto-Senetiner-Syrah-06-Mercado.png",
     id:6,
     categoria : "syrah", 
     stock:10,
},
{
    nombre : "Patridge",
     tag : "6 unidades",
    precio :"7500",
    imagen :"https://http2.mlstatic.com/D_NQ_NP_732896-MLA47379512001_092021-O.jpg",
     id:7,
    categoria : "blanco",
    stock:10,
}




];

export const getProducts = (categoria) =>
  new Promise((res, rej) => {
    const response = categoria
      ? products.filter((p) => p.categoria === categoria)
      : products;
    setTimeout(() => {
      res(response);
    }, 3000);
  });


  export const getProduct = (productId) =>
  new Promise((res, rej) => {
    const response = products.find ((product)=> product.id === +productId  )
    console.log({response})
     setTimeout(() => {
      res(response);
    }, 3000);
  });

