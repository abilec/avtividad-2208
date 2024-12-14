const Modal = (props) => {
    if (!props.open) return null; // No renderizar si no está abierto

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full relative z-60">
                {/* Botón de cerrar arriba a la derecha */}
                <button onClick={props.onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    ✕
                </button>

                {/* Contenido del modal */}
                <div className="flex flex-col w-full mb-16">
                    {props.children}
                </div>

                {/* Contenedor de los botones */}
                <div className="absolute bottom-4 right-4 flex space-x-4">
                    <button onClick={props.onClick} className="aceptar px-4 py-2 rounded-lg">
                        Aceptar
                    </button>
                    <button onClick={props.onClose} className="cancelar px-4 py-2 rounded-lg">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

/*open, // Si el modal está abierto o no
onClose = () => { }, // Función para cerrar el modal
onClick = () => { }, // Función para aceptar
children, // Contenido dentro del modal
aceptar = true, // Mostrar botón Aceptar
cancelar = true, // Mostrar botón Cancelar*/
