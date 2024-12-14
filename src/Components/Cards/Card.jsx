import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';
import { EliminarProducto } from '../../Services/Producto';

const Card = (props) => {

    const Borrar = async(id)=>{
        try {
            let rsp = await EliminarProducto(id);
            if(rsp)
            {
                return rsp;
            }
        } catch (error) {
            console.error("No se pudo eliminar el producto");
        }
    }

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

            {/* Botón en la esquina inferior derecha */}
            <button type="button" className="absolute right-2 text-azulc hover:bg-azulc hover:text-rosa rounded-md w-8 h-8" onClick={props.open}>
                <ModeIcon fontSize="small" />
            </button>
            <button type="button" className="absolute bottom-2 right-2 text-azulc hover:text-rosa hover:bg-azulc rounded-md w-8 h-8" onClick={()=>Borrar(props.id)}>
                <DeleteIcon fontSize="small"/>
            </button>
        </div>
    );
}

export default Card;
