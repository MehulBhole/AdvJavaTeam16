import axios from "axios";

export async function sendOwnerData(formData)
{        
    try {
        const response = axios.post("http://localhost:9090/ownerregister",formData);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}
export async function loginOwnerData(formData)
{        
    try {
        const response = axios.post("http://localhost:9090/owner-login",formData);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}