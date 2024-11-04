import { GET } from "./Fetch"

const ObtenerProductos = async () =>{
    try {
        let rsp = await GET("lista");
        return rsp;
    } catch (error) {
        console.error("Error al obtener lista de productos");
        return null;
    }
}

export default ObtenerProductos;