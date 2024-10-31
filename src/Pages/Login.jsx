import Callbtn from '../Components/Buttons/buttonCall';
import Input from '../Components/Inputs/Input';
import { useState } from 'react'
import PostApi from '../Services/Auth';
import Inicio from './Inicio';
import gato from '../Assets/Img/noteinicio.jpg';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const [frmDatos, setFrmDatos] = useState({nombre:"",clave:""});

    const SubmitLogin = async () => {
        if (!frmDatos.nombre || !frmDatos.clave) {
            alert("Completa los campos.");
        } else {
            // let respond = {
            //     name: frmDatos.nombre,
            //     contra: frmDatos.contraseña
            // }
            // localStorage.setItem("accesstoken", JSON.stringify(respond));
            try{
                let rsp = await PostApi(frmDatos);
                console.log(rsp);
                if(rsp.accessToken){
                    localStorage.setItem("accesstoken",rsp.accessToken);
                    window.location.replace("/inicio");
                }else{
                    window.alert("Error Api");
                }
                
            }catch{
                window.alert("No esta registrado");
            }
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
                                change={(e) => { setFrmDatos({ ...frmDatos, clave: e.target.value }) }}
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