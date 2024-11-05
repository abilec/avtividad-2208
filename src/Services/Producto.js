import { GETBASICO } from "./Fetch"

const ObtenerProductos = async () =>{
    try {
        let rsp = await GETBASICO("lista");
        return rsp?.data || [];
    } catch (error) {
        console.error("Error al obtener lista de productos");
        return [];
    }
}

export default ObtenerProductos;