import ObtenerProductos from "../../Services/Producto";
import { useState, useEffect } from "react";
import Header from "../../Components/Header/header";
import Card from "../../Components/Cards/Card";


const GestionProductos = () => {
    const [menuLinks, setMenuLinks] = useState([
        { to: "/inicio", text: "Inicio" }
    ]);

    const [listaProductos, setListaProductos] = useState([]);
    useEffect(() => {
        const Lista = async () => {
            try {
                let rsp = await ObtenerProductos();
                if (rsp) {
                    setListaProductos(rsp);
                }
            } catch (error) {
                console.error("No se encontro respuesta para ListadeProductos");
            }
        }
        Lista();
    }, [])

    return (
        <div className="flex flex-col h-full w-full items-center">
            <Header menu={menuLinks} />
                      
            <div className="flex flex-col w-[25vw] h-[72.5vh] mt-20 border-2 border-azul rounded-lg">
                {
                    listaProductos.map((p,index)=>(
                        <Card key={index} texto={p.nombre} valor={p.precio} foto={p.img_url} />
                    ))
                }
            </div>
        </div>
    )



}


export default GestionProductos