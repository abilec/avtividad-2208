import { useState } from "react"
import Header from "../../Components/Header/header"

const AgregarProductos = () => {
    const [menuLinks, setMenuLinks] = useState([
        { to: "/inicio", text: "Inicio" }
    ]);

    return (
        <div className="flex flex-col h-full w-full">
            <Header menu={menuLinks} />
        </div>
    )



}


export default AgregarProductos