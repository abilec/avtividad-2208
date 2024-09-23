const Input =(props)=>{
    return(
        <input type={props?.type} placeholder={props?.ph} onChange={props.change} className={props?.class}/>
    )
}

export default Input