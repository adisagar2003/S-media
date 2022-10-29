import axios from "axios";
import { useState, useEffect } from "react";
import { API_DATA } from "../config/api_files";
export default function usePosts(){
    const [posts,setPosts] = useState<object>([]);
    const [postsLoading,setPostsLoading] = useState(true);
    
    useEffect(() => {
        const fetchPosts =async () =>{
            await axios.get(`${API_DATA.API_BASE_URL}posts`,{ withCredentials: true }).then((response)=>{
                setPosts(response.data);
                setPostsLoading(false);
                console.log({response},'post');

            })
        }

      fetchPosts();
    
    }, [postsLoading])
    return  {
      posts,postsLoading
      }
}