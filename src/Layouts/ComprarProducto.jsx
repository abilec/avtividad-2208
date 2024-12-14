import Modal from "../Components/Modals/modal";

const ComprarProducto=(props)=>{

    return(
        <Modal open={openModal} onClose={() => setOpenModal(false)} onClick={agregar}>
            <h1 className="text-center text-lg mb-10">Comprar Producto</h1>
            <div>
                <img className="rounded-xl max-w-[20vw]" src={props.foto} />
            </div>
            <div className="space-y-1 ">
                <h1 className="font-serif text-lg ">{props.texto} </h1>
                <p className="text-rosa font-medium" >{props.valor}</p>
            </div>
        </Modal>
    )

}

export default ComprarProducto();