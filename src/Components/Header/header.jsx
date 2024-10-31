import { useState } from "react";
import Linkbtn from "../Buttons/buttonsLink";
import Callbtn from "../Buttons/buttonCall";
import Input from "../Inputs/Input";


const Header = (props) => {
    const [menu, setMenu] = useState(props.menu);
    const [texto, setTexto] = useState("");



    const Alerta = (dato) => {
        alert(dato);
    }
    const LogOut = () =>{
        localStorage.clear();
        window.location.replace("/login");
    }

    return (
        <div className="flex flex-row fixed p-2.5 space-x-5 w-full  bg-white">
            <h1 className="font-serif italic text-2xl text-azul" >Shop</h1>
            <div className="flex flex-grow justify-end">
                {
                    menu.map((item, index) => {
                        return (
                            <Linkbtn
                                class={'px-5 py-1 text-azulc hover:text-rosa hover:underline '}
                                to={item.to}
                                text={item.text}
                                key={index}
                            />
                        )
                    })
                }
            </div>

            <div className="flex justify-end ">
                <Input
                    type={'text'}
                    ph={'Buscar'}
                    change={(e) => { setTexto(e.target.value) }}
                    class={'border-2 border-azul rounded-full px-2 mr-2 '}
                    
                />
                <Callbtn
                    text={'Enviar'}
                    callback={() => Alerta(texto)}
                    class={'px-5  text-azulc hover:text-rosa hover:underline  hover:bg-azulc hover:rounded-full'}
                />
            </div>
            <div className="flex justify-end ">
                <Callbtn 
                    text={'Log out'}
                    callback={() => LogOut()}
                    class={'px-5  text-azulc hover:text-rosa hover:underline  hover:bg-azulc hover:rounded-full'}
                />
            </div>
        </div>
    )
}
export default Header;