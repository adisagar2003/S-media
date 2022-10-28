import axios from "axios";
import { useState, useEffect } from "react";
import { API_DATA } from "../config/api_files";

export default function usePosts(){
    const [posts,setPosts] = useState<object>([]);
    
    useEffect(() => {
        const fetchPosts =async () =>{
            await axios.get(`${API_DATA.API_BASE_URL}posts`).then((response)=>{
                setPosts(response);
                

            })
        }
    
      return () => {
        second
      }
    }, [third])
    
}