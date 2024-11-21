import {Link} from "react-router-dom"

const Linkbtn = (props) =>{
    return(
        <>
            <Link onClick={props?.to} to={props?.to} className={props?.class}>{props?.text}</Link>
        </>
    )
}
export default Linkbtn;