import Header from "../Components/Header/header";
import journal from "../Assets/Img/journalpink.jpg";
import notebook from "../Assets/Img/notebook.jpg";
import notelila from "../Assets/Img/notebooklila.jpg";
import sketches from "../Assets/Img/sketches.jpg";
import notesalmon from "../Assets/Img/notesalmon.jpg";
import Cardprod from "../Components/Cards/prodCard";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import {ObtenerProductos} from "../Services/Producto";

const Inicio = () => {
    const [user, setUser] = useState("");
    const baseMenuLinks = [
        { to: '/inicio', text: 'Inicio' }
    ];
    const [menuLinks, setMenuLinks] = useState(baseMenuLinks);
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("accesstoken");
        if (token) {
            const claims = jwtDecode(token);
            let agregarLinks = [];
            if (claims.Rol === "admin") {
                agregarLinks = [
                    { to: '/productos', text: 'Gestionar Productos' },
                ];
            } else if (claims.Rol === "cliente") {
                agregarLinks = [
                    { to: '/info', text: 'Acerca de' },
                    { to: '/contacto', text: 'Contacto' }
                ];
            }
            setUser(claims);
            setMenuLinks([...baseMenuLinks, ...agregarLinks]);
        }
    }, []);

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
        <div className="flex flex-col h-full w-full ">
            <Header menu={menuLinks} />
            <div className="flex w-full">
                <img src={journal} alt="journal" />
            </div>
            <div className="flex flex-col">
                <div className="text-center">
                    <h1 className="font-serif italic text-azul text-3xl">Bienvenido/a {user.Usuario}!</h1>
                </div>
            </div>
            <div className="flex flex-row flex-wrap gap-x-5 pt-20 px-20 items-center justify-center">
                {listaProductos.map((p, index) => (
                    <Cardprod key={index} texto={p.nombre} valor={"$"+p.precio} foto={p.img_url} />
                ))}
            </div>
        </div>
    );
};

export default Inicio;
