import Callbtn from '../Components/Buttons/buttonCall';
import Input from '../Components/Inputs/Input';
import { useState } from 'react'
import PostApi from '../Services/Inter';
import Inicio from './Inicio';
import { POST } from '../Services/Fetch';


const Login=()=>{
    const [frmDatos,setFrmDatos] = useState({});

    const SubmitLogin = async () =>{
        if(!frmDatos.nombre || !frmDatos.contraseña){
            alert("Completa los campos.");
        }else{
            let respond={
                name: frmDatos.nombre,
                contra: frmDatos.contraseña
            }
            localStorage.setItem("usrDatos", JSON.stringify(respond));
            // let rsp = await POST("login",{name:frmDatos.nombre,contra:frmDatos.contraseña});
            // localStorage.setItem("usrDatos",JSON.stringify(rsp.accessToken));

            window.location.replace("/inicio");
        }
    }


    return(
        <>
        <div className='h-[100vh] bg-gradient-to-br from-menta to-crema flex justify-center items-center'>
            <div className='flex flex-col content-center w-80 h-80 bg-white justify-center rounded-lg shadow-2xl'>
                <div className='text-center' >
                    <h1 className="font-serif italic text-4xl" >Shop</h1>
                    <h6>Iniciar Sesión</h6>
                </div>
                <form action="#" method="post" className='flex flex-col m-10 space-y-5 '>
                    <Input
                        type={'text'}
                        ph={'Ingrese nombre'}
                        change={(e)=>{setFrmDatos({...frmDatos,nombre:e.target.value})}}
                    />
                    <Input
                        type={'password'}
                        ph={'Contraseña'}
                        change={(e)=>{setFrmDatos({...frmDatos,contraseña:e.target.value})}}
                    />
                    
                    <Callbtn
                        text={'Enviar'} 
                        callback={()=>{ SubmitLogin() }}
                        class={'bg-emerald-200 rounded-full text-black hover:bg-marron hover:shadow-inner p-1 '}
                    />
                </form>
            </div>
        </div>
        </>
    )
}

export default Login