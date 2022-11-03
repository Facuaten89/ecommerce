
  //el numero nunca debe superar el stock
  //si no hay stock no se debe ejecutar la funcion
  //si hay stock se debe ejecutar la funcion onAdd

  import { useState, useEffect } from "react";
import Button from "./Button";

const ContadorStock = ({ stock, onAdd }) => {

  const [contador, setContador] = useState(0);

  const handleAdd = () => {
    if(contador < stock){
    setContador(contador + 1);
    }
  };

  const handleSubstract = () => {
    if(contador > 0) setContador(contador - 1);
  };

  return (
    <div className="grid" >
      <Button onClick={() => handleAdd()}> Cantidad </Button>

      <span><h3>{contador}</h3></span>

      <Button onClick={() => handleSubstract()}> quitar </Button>
      <Button onClick={() => {

       if(ContadorStock) onAdd()

        }} > Agregar al carrito </Button>
    </div>
  );
};

export default ContadorStock;
