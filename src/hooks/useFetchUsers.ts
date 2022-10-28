import { API_DATA } from "../config/api_files";
import { useEffect, useState } from "react";
import axios from "axios";
export default function useFetchUsers() {
    const [responseData, setResponseData] = useState([]);
    const [loading,setIsLoading] = useState(false);

    useEffect(()=>{
        const fetchUsers = async () => {
            let  data = await axios.get('http://localhost:5000/users');
            console.log(data);
            setResponseData([...(data.data.users)]);
            setIsLoading(false);
        }
fetchUsers();

    },[loading])
    return {responseData,loading} 
}