import axios from "axios";

class AuthServices{
    Profile(username){
        return axios.get(`http://localhost:4000/user/${username}`,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('token')
            } 
        })
    }
}
export default new AuthServices();
