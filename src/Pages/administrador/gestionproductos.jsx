import { ObtenerProductos } from "../../Services/Producto";
import { useState, useEffect } from "react";
import Header from "../../Components/Header/header";
import Card from "../../Components/Cards/Card";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AgregarProducto from "../../Layouts/AgregarProducto";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const GestionProductos = () => {
    const [menuLinks, setMenuLinks] = useState([
        { to: "/inicio", text: "Inicio" },
        { to: "/productos", text: "Gestionar Productos" }
    ]);

    const [listaProductos, setListaProductos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const productosPorPagina = 4;
    const [terminoBusqueda, setTerminoBusqueda] = useState('');

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
    }, []);

    const handleBusquedaChange = (e) => {
        setTerminoBusqueda(e.target.value);
    };

    const productosFiltrados = listaProductos.filter((producto) =>
        producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );

    // Función para obtener los productos de la página actual
    const obtenerProductosPagina = () => {
        const inicio = (paginaActual - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;
        return productosFiltrados.slice(inicio, fin);
    };

    // Función para cambiar la página
    const cambiarPagina = (pagina) => {
        if (pagina >= 1 && pagina <= Math.ceil(productosFiltrados.length / productosPorPagina)) {
            setPaginaActual(pagina);
        }
    };

    return (
        <div className="flex flex-col h-full w-full items-center">
            <Header menu={menuLinks} />

            <div className="flex flex-col mt-20">
                <label className="relative block">
                    <span className="sr-only">Buscar producto</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <SearchRoundedIcon />
                    </span>
                    <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Buscar producto..."
                        type="text"
                        name="search"
                        value={terminoBusqueda}
                        onChange={handleBusquedaChange}
                    />
                </label>
            </div>

            <div className="flex flex-col w-[25vw] h-[72.5vh] mt-5 border-2 border-azul rounded-lg overflow-y-auto">
                <div className="mb-3 text-center mt-5">
                    <AgregarProducto />
                </div>
                {
                    obtenerProductosPagina().map((p, index) => (
                        <Card key={index} texto={p.nombre} valor={p.precio} foto={p.img_url} id={p.id_prod} productoInicial={p} actualizarLista={() => setListaProductos([...listaProductos])} />
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
                    <ArrowBackIcon /> Anterior
                </button>
                <span className="text-center text-base">Página {paginaActual}</span>
                <button
                    onClick={() => cambiarPagina(paginaActual + 1)}
                    className="p-2 text-azulc rounded-lg disabled:bg-gray-400"
                    disabled={paginaActual === Math.ceil(productosFiltrados.length / productosPorPagina)}
                >
                    Siguiente <ArrowForwardIcon />
                </button>
            </div>
        </div>
    );
}

export default GestionProductos;
