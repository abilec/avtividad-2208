import { GETBASICO,POST } from "./Fetch"

export async function ObtenerProductos(){
    try {
        let rsp = await GETBASICO("lista");
        return rsp?.data || [];
    } catch (error) {
        console.error("Error al obtener lista de productos");
        return [];
    }
}

export async function NuevoProducto(data){
    try {
        let rsp = await POST("alta",data);
        return rsp;
    } catch (error) {
        console.error("Error al agregar nuevo producto");
        return null;
    }
} 

