const InputModal = (props) => {
    return (
        <>
            <label>{props.label}</label>
            <br />
            <input
                type={props.type}
                className={!props.class?"border rounded-lg border-azul w-[20vw] p-1 m-2":props.class}
                onChange={props.funcion}
                value={props.value}
            />
        </>
    )
}

export default InputModal;