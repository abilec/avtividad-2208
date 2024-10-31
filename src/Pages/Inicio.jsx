import Header from "../Components/Header/header";
import journal from "../Assets/Img/journalpink.jpg";
import notebook from "../Assets/Img/notebook.jpg";
import notelila from "../Assets/Img/notebooklila.jpg";
import sketches from "../Assets/Img/sketches.jpg";
import notesalmon from "../Assets/Img/notesalmon.jpg";
import Cardprod from "../Components/Cards/prodCard";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";
import AgregarProductos from "./administrador/agregarprod";
import { useEffect, useState } from "react";

const Inicio = () => {
    const [rol, setRol] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("accesstoken");
        if (token) {
            let user = jwtDecode(token);
            if (user.rol !== "admin") {
                navigate("/inicio");
            } else {
                setRol(user.rol);
            }
        }
    }, [navigate]);

    const MENU_LINKS = [
        {
            to: '/inicio',
            text: 'Inicio'
        },
        {
            to: '/info',
            text: 'Acerca de'
        },
        {
            to: '/contacto',
            text: 'Contacto'
        },
        rol && {
            to: '/agregarproductos',
            text: 'Agregar Productos'
        }
    ];

    return (
        <div className="flex flex-col h-full w-full">
            <Header menu={MENU_LINKS} />
            {rol && <AgregarProductos />}
            <div className="flex w-full">
                <img src={journal} alt="journal" />
            </div>
            <div className="flex flex-row gap-x-5 pt-20 px-20 items-center">
                <Cardprod
                    foto={notebook}
                    texto="Notebook Floral"
                    valor="$4500.-"
                />
                <Cardprod
                    foto={notelila}
                    texto="Notebook Lila"
                    valor="$5000.-"
                />
                <Cardprod
                    foto={sketches}
                    texto="Notebook Rosa"
                    valor="$5200.-"
                />
                <Cardprod
                    foto={notesalmon}
                    texto="Note Floral"
                    valor="$4000.-"
                />
            </div>
        </div>
    );
};

export default Inicio;
