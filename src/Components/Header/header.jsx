import Linkbtn from "../Buttons/buttonsLink";
import Callbtn from "../Buttons/buttonCall";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate();

    const LogOut = () => {
        localStorage.clear();
        navigate("/");
    }

    const inicio = () =>{
        navigate("/inicio");
    }

    return (
        <div className="flex flex-row fixed p-2.5 space-x-5 w-full bg-white">
            <button onClick={inicio}><h1 className="font-serif italic font-bold text-2xl text-azulc">Note Shop</h1></button>
            <div className="flex flex-grow justify-start">
                {props.menu.map((item, index) => (
                    <Linkbtn
                        class={'px-5 py-1 text-azulc hover:text-rosa hover:underline '}
                        to={item.to}
                        text={item.text}
                        key={index}
                    />
                ))}
            </div>

            <div className="flex justify-end">
                <Callbtn
                    text={'Cerrar Sesion'}
                    callback={LogOut}
                    class={'px-5 text-azulc hover:text-rosa hover:underline'}
                />
            </div>
        </div>
    )
}

export default Header;
