import Callbtn from '../Components/Buttons/buttonCall';
import Input from '../Components/Inputs/Input';
import { useState } from 'react'
import PostApi from '../Services/Inter';
import Inicio from './Inicio';
import { POST } from '../Services/Fetch';
import gato from '../Assets/Img/noteinicio.jpg';


const Login = () => {
    const [frmDatos, setFrmDatos] = useState({});

    const SubmitLogin = async () => {
        if (!frmDatos.nombre || !frmDatos.contraseña) {
            alert("Completa los campos.");
        } else {
            let respond = {
                name: frmDatos.nombre,
                contra: frmDatos.contraseña
            }
            localStorage.setItem("usrDatos", JSON.stringify(respond));
            // let rsp = await POST("login",{name:frmDatos.nombre,contra:frmDatos.contraseña});
            // localStorage.setItem("usrDatos",JSON.stringify(rsp.accessToken));

            window.location.replace("/inicio");
        }
    }


    return (
        <>
            <div className='h-[100vh] bg-gradient-to-br from-crema to-rosa flex justify-center items-center'>
                <div className='flex flex-row w-[50vw] h-[50vh] bg-white rounded-lg shadow-2xl'>
                    <div className='flex w-[25vw] h-[50vh] justify-center items-center'>
                        <img src={gato} className='flex w-[20vw] '/>
                    </div>
                    <div className=' w-[25vw] h-[50vh] flex flex-col justify-center items-center'>
                        <div className='text-center' >
                            <h1 className="font-serif italic text-4xl text-azul" >Shop</h1>
                            <h6 className='text-azulc'>Iniciar Sesión</h6>
                        </div>


                        <form action="#" method="post" className='flex flex-col m-10 space-y-5 '>
                            <Input
                                type={'text'}
                                ph={'Ingrese nombre'}
                                change={(e) => { setFrmDatos({ ...frmDatos, nombre: e.target.value }) }}
                                 class="border border-azul text-azulc font-bold hover:text-rosa rounded-full p-2"
                            />
                            <Input
                                type={'password'}
                                ph={'Contraseña'}
                                change={(e) => { setFrmDatos({ ...frmDatos, contraseña: e.target.value }) }}
                                class="border border-azul text-azulc font-bold hover:text-rosa rounded-full p-2"
                            />

                            <Callbtn
                                text={'Enviar'}
                                callback={() => { SubmitLogin() }}
                                class={'bg-azul rounded-full text-crema  hover:bg-rosa hover:text-azul hover:underline hover:shadow-2xl p-1 '}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login