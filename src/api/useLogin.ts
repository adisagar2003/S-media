import axios from "axios";
import { useEffect, useState} from "react";
import { API_DATA } from "../config/api_files";
export default  function useLogin(params:any){
    const [response,setResponse] = useState('');
    const [error, setError] = useState('');
    const [loading,setLoading] = useState(true);
    const fetchData = async () => {
        try{
            let data = await axios.post(`${API_DATA.API_BASE_URL}users/login`, {
                "email": params.email,
                "password": params.password,
            })

            setResponse(data.data);
            setLoading(false);
            
        }
        catch(err:any)
        {
            console.log(err);
            setError(err);
            setLoading(false);
        }
           
        return {response, error, loading}
    }      
useEffect(()=>{
    fetchData();
},[loading])
    
    
}