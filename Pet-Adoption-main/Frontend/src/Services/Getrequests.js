import axios from "axios";

export const fetch_post_data = async () =>{
    return await axios.get("http://localhost:5000/postreq");
}