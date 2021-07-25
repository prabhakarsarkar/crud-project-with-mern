import axios from 'axios'
const token = window.localStorage.getItem("token")
const axiosInstance= axios.create({
    baseURL:"http://localhost:3000",
    headers:{
        'Authorization': token ? `Bearer ${token}`:''
    } 

})


export default axiosInstance;