import {ObtenerProductos} from "../../Services/Producto";
import { useState, useEffect } from "react";
import Header from "../../Components/Header/header";
import Card from "../../Components/Cards/Card";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AgregarProducto from "../../Layouts/AgregarProducto";

const GestionProductos = () => {
    const [menuLinks, setMenuLinks] = useState([
        { to: "/inicio", text: "Inicio" }
    ]);

    const [listaProductos, setListaProductos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const productosPorPagina = 5;

    useEffect(() => {
        const Lista = async () => {
            try {
                let rsp = await ObtenerProductos();
                if (rsp) {
                    setListaProductos(rsp);
                }
            } catch (error) {
                console.error("No se encontró respuesta para Lista de Productos");
            }
        }
        Lista();
    }, [listaProductos]);

    // Función para obtener los productos de la página actual
    const obtenerProductosPagina = () => {
        const inicio = (paginaActual - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;
        return listaProductos.slice(inicio, fin);
    };

    // Función para cambiar la página
    const cambiarPagina = (pagina) => {
        if (pagina >= 1 && pagina <= Math.ceil(listaProductos.length / productosPorPagina)) {
            setPaginaActual(pagina);
        }
    };

    return (
        <div className="flex flex-col h-full w-full items-center">
            <Header menu={menuLinks} />

            <div className="flex flex-col mt-20">
                <AgregarProducto/>
            </div>
            
            <div className="flex flex-col w-[25vw] h-[72.5vh] mt-5 border-2 border-azul rounded-lg overflow-y-auto">
                {
                    obtenerProductosPagina().map((p, index) => (
                        <Card key={index} texto={p.nombre} valor={p.precio} foto={p.img_url} />
                    ))
                }
            </div>

            {/* Controles de Paginación */}
            <div className="flex mt-4 space-x-4">
                <button 
                    onClick={() => cambiarPagina(paginaActual - 1)} 
                    className="p-2 text-azulc rounded-lg disabled:bg-gray-400"
                    disabled={paginaActual === 1}
                >
                    <ArrowBackIcon/> Anterior
                </button>
                <span className="text-center text-base">Página {paginaActual}</span>
                <button 
                    onClick={() => cambiarPagina(paginaActual + 1)} 
                    className="p-2 text-azulc rounded-lg disabled:bg-gray-400"
                    disabled={paginaActual === Math.ceil(listaProductos.length / productosPorPagina)}
                >
                    Siguiente <ArrowForwardIcon/>
                </button>
            </div>
        </div>
    );
}

export default GestionProductos;
