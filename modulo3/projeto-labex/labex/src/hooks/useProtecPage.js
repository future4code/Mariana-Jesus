import { useEffect } from "react";
import { useHistory } from "react-router";

 export const useProtect = () =>{
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token === null){
            alert('Faça o login para acessar')
            history.push('/login')
        }
    },[])
}
// export default useProtect