import axios from "axios";

export async function sendOwnerData(formData)
{        
    try {
        const response = axios.post("http://" , formData);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}