import { useEffect, useState } from 'react';
import RouterApp from './RouterApp';
import { jwtDecode } from 'jwt-decode';
import { json } from 'react-router-dom';
    

const App = (props) => {
    const [userData, setUserData] = useState(false);

    useEffect(()=>{
        let token = localStorage.getItem("accesstoken");
        if(token){
            try{
                let decode =JSON.stringify(jwtDecode(token));
                console.log(decode);
                setUserData(decode);
            }catch(error){
                console.error("Error decode", token);
            }
        }
    },[])   
    return(
        <RouterApp />
    );
}

export default App;