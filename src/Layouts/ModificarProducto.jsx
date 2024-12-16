import { useState } from "react";
import ModeIcon from '@mui/icons-material/Mode';
import Modal from "../Components/Modals/modal";
import InputModal from "../Components/Inputs/inputmodal"
import { EditarProducto } from "../Services/Producto";

const ModificarProducto = ({ id,productoInicial }) => {
    const [openModal, setOpenModal] = useState(false);
    const [productoActualizado, setProductoActualizado] = useState(productoInicial);

    const Modificar = async () => {
        try {
            let rsp = await EditarProducto({ ...productoActualizado, id_prod: id });
            if (rsp) {
                setProductoActualizado(rsp);
                setOpenModal(false);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <button type="button" className="absolute right-2 text-azulc hover:bg-azulc hover:text-rosa rounded-md w-8 h-8" onClick={() => setOpenModal(true)}>
                <ModeIcon fontSize="small" />
            </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} onClick={Modificar}>
                <h3 className="text-center font-bold mb-10">Modificar Producto</h3>
                <div className="mb-4">
                    <InputModal type={"text"} value={productoActualizado.nombre} label={"Titulo"} funcion={(e) => setProductoActualizado({ ...productoActualizado, nombre: e.target.value })} />
                </div>
                <div className="mb-4">
                    <InputModal type={"text"} value={productoActualizado.precio} label={"Precio"} funcion={(e) => setProductoActualizado({ ...productoActualizado, precio: e.target.value })} />
                </div>
                <div className="mb-4">
                    <InputModal type={"file"} label={"Imagen"} funcion={(e) => setProductoActualizado({ ...productoActualizado, img_url: e.target.files[0] })} />
                </div>
            </Modal>
        </>
    )
}

export default ModificarProducto;