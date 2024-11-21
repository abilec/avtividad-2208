import ModeIcon from '@mui/icons-material/Mode';

const Card = (props) =>{
    return(
        <div className="flex flex-row rounded-lg border border-azul m-3 p-2">
            <div className="float-left box-content max-w-[5vw] object-none object-center mr-5">
                <img src={props.foto}/>
            </div>
            <div>
                <h1 className="text-xl">{props.texto}</h1>
                <p>${props.valor}</p>
            </div>
            <div className="flex flex-row items-end  object-right-bottom">
                <div className="flex">
                    <button type="button" className=' text-rosa hover:bg-azul hover:text-crema rounded-md w-8 h-8' onClick={props.open}>
                        <ModeIcon fontSize='small'/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card;