import { useEffect, useState } from "react";
import Callbtn from "../Buttons/buttonCall";
import { jwtDecode } from "jwt-decode";


const Cardprod = (props) => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("accesstoken");
        if (token) {
            const usuario = jwtDecode(token);
            setUser(usuario);
        }
    }, [])

    return (
        <div className="text-center" >
            <div>
                <img className="rounded-xl max-w-[20vw]" src={props.foto} />
            </div>
            <div className="space-y-1 ">
                <h1 className="font-serif text-lg ">{props.texto} </h1>
                <p className="text-rosa font-medium" >{props.valor}</p>
            </div>
            {user && user.Rol == "cliente" && (<div>
                <Callbtn text="Comprar" class="font-serif p-3 m-3 text-azul hover:bg-azul hover:text-crema hover:rounded-xl hover:underline" />
            </div>)}
        </div>
    )
}
export default Cardprod;