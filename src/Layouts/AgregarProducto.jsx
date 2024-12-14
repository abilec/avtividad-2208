import { useState } from "react";
import Modal from "../Components/Modals/modal";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InputModal from "../Components/Inputs/inputmodal";
import { NuevoProducto } from "../Services/Producto";

const AgregarProducto = () => {
    const [openModal, setOpenModal] = useState(false);
    const [nuevo, setNuevo] = useState({ nombre: "", precio: "", img_url: "" });

    const agregar = async () => {
        try {
            let rsp = await NuevoProducto(nuevo);
            if (rsp) {
                console.log("Producto Agregado");
                setOpenModal(false);
            }
        } catch (error) {
            console.error("no se agrego la re calcada");
        }
    }

    return (
        <>
            <button onClick={() => setOpenModal(true)} className=" text-azulc hover:text-rosa hover:bg-azulc rounded-lg p-2">Agregar Producto <AddCircleOutlineIcon fontSize="large" /></button>

            <Modal open={openModal} onClose={() => setOpenModal(false)} onClick={agregar}>
                <h1 className="text-center text-lg mb-10">Nuevo Producto</h1>
                <div className="mb-4">
                    <InputModal type={"text"} label={"Titulo"} funcion={(e) => setNuevo({...nuevo,nombre: e.target.value })} />
                </div>
                <div className="mb-4">
                    <InputModal type={"text"} label={"Precio"} funcion={(e) => setNuevo({...nuevo,precio: e.target.value })} />
                </div>
                <div className="mb-4">
                    <InputModal type={"file"} label={"Imagen"} funcion={(e) => setNuevo({...nuevo,img_url: e.target.value })} />
                </div>
            </Modal>
        </>
    )
}

export default AgregarProducto;