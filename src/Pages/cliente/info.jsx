import { useState, useEffect } from "react";
import Header from "../../Components/Header/header";
import { jwtDecode } from "jwt-decode";

const Info=()=>{
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
            <div className="flex flex-row w-[80vw] h-[80vh] mt-24 bg-white rounded-lg rounded-tl-3xl rounded-bl-3xl shadow-black shadow-2xl">
                <div className="w-[40vw] h-[80vh] shadow-black shadow-md rounded-3xl">
                    <img src="src/Assets/Img/todaypink.jpg" alt="" className="object-cover h-full rounded-3xl "/>
                </div>
                <div className="w-[40vw] h-[80vh] flex flex-col justify-center items-center">
                    <div>
                        <h1 className="text-4xl text-azul font-serif italic font-bold">Acerca de Nosotros</h1>
                    </div>
                    <div className="text-justify m-5 space-y-6 text-xl">
                        <p>En Note Shop, creemos que cada página en blanco es una oportunidad para soñar, 
                            planificar, y crear. Somos una tienda online especializada en 
                            productos que inspiran y organizan tu vida, desde libretas y anotadores hasta planificadores y accesorios de papelería.</p>
                        <p>Nuestra misión es ofrecer productos de calidad que no solo sean útiles, sino también hermosos y llenos de estilo. Entendemos que cada persona es única, y por eso nos esforzamos en ofrecer una amplia variedad de diseños que se 
                        adapten a todos los gustos y necesidades.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Info;