import { useState, useEffect } from "react";
import Button from "./Button"

const Counter = ({reducirPrecio,onAdd}) => {
  //el numero nunca debe superar el stock
  //si no hay stock no se debe ejecutar la funcion
  //si hay stock se debe ejecutar la funcion onAdd

  const [contador,setContador] = useState(0)
  const [mensaje,setMensaje] = useState (false)

  const handleAdd = () => {
  setContador(contador + 1)
 
  };
  
  const handleSubstract = () => {
    if (contador > 0) setContador(contador - 1);
  };
   /* los tres usos de useEffect */

useEffect(()=>{console.log("se vuelve a renderizar")})

useEffect (()=>{console.log("se ejecuta cuando el componenete es montado")
},[])


  useEffect (()=>{

console.log("se ejecuta cuando cambia el contador")
if (contador >  100){
  setMensaje (true)
  reducirPrecio()
 } 
},[contador]) 

  return (
    <div className="grid">
      {mensaje ? <span>Obtienen 10% de descuento</span> : null}

        <Button onClick = {() => handleAdd()}> sumar </Button>
        <span><h3> {contador} </h3></span>

        <Button onClick = {() => handleSubstract()}> restar </Button>
        <Button
        onClick={() => {
          if (contador) onAdd();
        }}
        disabled={!contador}
      >
        {" "}
        Agregar al carrito{" "}
      </Button>
   </div>
   ); 
};
export default Counter