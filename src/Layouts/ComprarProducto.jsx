import Modal from "../Components/Modals/modal";
import { useEffect, useState } from "react";
import Callbtn from "../Components/Buttons/buttonCall";
import { jwtDecode } from "jwt-decode";
import InputModal from "../Components/Inputs/inputmodal";
import { ObtenerProductos } from "../Services/Producto";




const ComprarProducto = () => {
    const [user, setUser] = useState("");
    const [open, setOpen] = useState(false);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const Lista = async () => {
            try {
                let rsp = await ObtenerProductos();
                if (rsp) {
                    setLista(rsp);
                }
            } catch (error) {
                console.error("No se encontro respuesta para ListadeProductos");
            }
        }
        Lista();
    }, [])


    const comprar = () => {

    }

    useEffect(() => {
        const token = localStorage.getItem("accesstoken");
        if (token) {
            const usuario = jwtDecode(token);
            setUser(usuario);
        }
    }, [])

    return (
        <>
            {user && user.Rol == "cliente" && (<>
                <div>
                    <Callbtn text="Comprar" callback={() => setOpen(true)} class="font-serif p-3 m-3 text-azul hover:bg-azul hover:text-crema hover:rounded-xl hover:underline" />
                </div>
                {lista.map((p, index) => (
                    <Modal key={index} open={open} onClose={() => setOpen(false)} onClick={comprar} btncomprar={true}>
                        <div className="flex flex-row">
                            <div className="shadow-black shadow-md h-[30vh] w-[10vw]">
                                <img src="src/Assets/Img/todaypink.jpg" alt="" className="object-cover h-full w-full" />
                            </div>
                            <div className="flex flex-col m-5 justify-center items-center">
                                <div className="text-left">
                                    <h1 className="text-xl text-azul font-serif italic font-bold ">{p.nombre}</h1>
                                    <br />
                                    <p className="text-rosa font-semibold font-serif">${p.precio}</p>
                                    <InputModal label={'Cantidad'} type={Number} class={"border rounded-lg border-rosa w-[6vw] p-1 m-2"} />
                                    <br />
                                    <label>Total: $</label>
                                </div>
                                <br />
                                <button className="bg-azul rounded-full text-crema  hover:bg-rosa hover:text-azul hover:shadow-2xl p-1 px-10 " >Comprar</button>
                            </div>
                        </div>
                    </Modal>
                ))}
            </>)}
        </>
    )
}
export default ComprarProducto;