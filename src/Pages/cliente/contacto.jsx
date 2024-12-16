import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/header";

const Contacto=()=>{
    const [user, setUser] = useState("");
    const baseMenuLinks = [
        { to: '/inicio', text: 'Inicio' }
    ];
    const [menuLinks, setMenuLinks] = useState(baseMenuLinks);

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

    return(
        <div className="flex flex-row justify-center h-full w-full">
            <Header menu={menuLinks}/>
            <div className="flex flex-row w-[80vw] h-[80vh] mt-24 bg-white rounded-lg rounded-tr-3xl rounded-br-3xl shadow-black shadow-2xl">
                
                <div className="w-[40vw] h-[80vh] flex flex-col justify-center items-center">
                    <div>
                        <h1 className="text-4xl text-azul font-serif italic font-bold">Contacto</h1>
                    </div>
                    <div className="text-justify m-5 space-y-6 text-xl">
                        <p>¿Tienes alguna pregunta o necesitas ayuda con tu pedido? No dudes en contactarnos. Nuestro equipo está aquí para asistirte.</p>
                        <p>Tel: +54 9 2235123456</p>
                        <p>Correo: noteshopassisten@gmail.com</p>
                    </div>
                </div>
                <div className="flex w-[40vw] h-[80vh] shadow-black shadow-md rounded-3xl bg-top">
                    <img src="src/Assets/Img/tienda.jpg" alt="" className="object-cover h-full w-full rounded-3xl "/>
                </div>
            </div>
        </div>
    )
}
export default Contacto;