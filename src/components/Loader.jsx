import { useEffect } from "react";


export const Loader = () => {
    useEffect (()=> {

console.log("Esta cargando")

return ()=> console.log("se desmonto")

    },[])
return <span>Cargando...</span>

}