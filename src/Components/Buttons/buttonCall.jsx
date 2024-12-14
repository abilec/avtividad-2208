const Callbtn = (props) =>{

    return(
        <button type="button" onClick={props.callback} className={props?.class}> {props?.text} </button>  
    )
}
export default Callbtn;