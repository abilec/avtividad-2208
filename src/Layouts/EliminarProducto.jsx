import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { BorrarProducto } from '../Services/Producto';
import Modal from '../Components/Modals/modal';

const EliminarProducto = ({ id }) => {
    const [openModal, setOpenModal] = useState(false);

    const Borrar = async () => {
        try {
            let rsp = await BorrarProducto(id);
            if (rsp) {
                console.log("Producto eliminado con éxito");
                setOpenModal(false);
            }
        } catch (error) {
            console.error("Error al eliminar producto", error);
        }
    }

    return (
        <>
            <button type="button" className="absolute bottom-2 right-2 text-azulc hover:text-rosa hover:bg-azulc rounded-md w-8 h-8" onClick={() => setOpenModal(true)}>
                <DeleteIcon fontSize="small" />
            </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} onClick={Borrar}>
                <h3 className="text-center font-bold">Se eliminará este producto</h3>
                <h5 className="text-center mt-5">¿Seguro?</h5>
            </Modal>
        </>
    )
}

export default EliminarProducto;
