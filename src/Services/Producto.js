import { GETBASICO,POST,DELETE } from "./Fetch"

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

export async function BorrarProducto(id){
    try {
        let rsp = await DELETE(`baja/${id}`);
        return rsp;
    } catch (error) {
        console.error(error);
        return null;
    }
}

