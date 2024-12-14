import EliminarProducto from '../../Layouts/EliminarProducto';
import ModificarProducto from '../../Layouts/ModificarProducto';

const Card = (props) => {
    return (
        <div className="relative flex flex-row rounded-lg border border-azul m-3 p-2">
            {/* Imagen */}
            <div className="float-left box-content max-w-[5vw] object-none object-center mr-5">
                <img src={props.foto} alt="Producto" />
            </div>

            {/* Contenido */}
            <div>
                <h1 className="text-xl">{props.texto}</h1>
                <p>${props.valor}</p>
            </div>
            <ModificarProducto id={props.id} productoInicial={props.productoInicial} />
            <EliminarProducto id={props.id} />
        </div>
    );
}

export default Card;
