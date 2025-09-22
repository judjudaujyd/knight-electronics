import axios, { isAxiosError } from "axios";

type UserData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
};


const signUpApi = async(data:UserData) => {

    try{    

        const authResponse = await axios.post("http://127.0.0.1:8000/user",data,{
            headers : {
                "Content-Type" : "application/json"
            }
        })

        return authResponse.data;

    }catch(error:any){
        if(axios.isAxiosError(error)) return error.response?.data;
        console.error("Error Establishing Connection :",error.message)
    }



}

export default signUpApi