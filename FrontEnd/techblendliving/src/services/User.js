import axios from "axios";

export async function sendUserData(formData)
{        
    try {
        const response = axios.post("http://" , formData);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}
export async function sendLoginData(userLogin){
    try {
        const response  = axios.post("",userLogin);
        return response;
    } catch (error) {
        console.log(error);
    }
}