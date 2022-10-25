import axios from "axios";
import { useState, useEffect } from "react";
import { API_DATA } from "../config/api_files";

export default function useCheckToken(){
    const [dataResponse, setDataResponse] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (window.localStorage.getItem("token")){
            axios.get(`${API_DATA.API_BASE_URL}users/check`).then((response)=>{
            if (response){
                console.log(response);
                setDataResponse(response);
                setIsLoading(false);
            }
            }).catch((err) => {
                setDataResponse(err);
                console.log(err);
                setIsLoading(false);
            })
        }
    
    
    }, [isLoading])
    
   

    return {dataResponse};
}