import ComprarProducto from "../../Layouts/ComprarProducto";


const Cardprod = (props) => {

    return (
        <div className="text-center" >
            <div>
                <img className="rounded-xl max-w-[20vw]" src={props.foto} />
            </div>
            <div className="space-y-1 ">
                <h1 className="font-serif text-lg ">{props.texto} </h1>
                <p className="text-rosa font-medium" >{props.valor}</p>
            </div>
            <ComprarProducto/>
        </div>
    )
}
export default Cardprod;