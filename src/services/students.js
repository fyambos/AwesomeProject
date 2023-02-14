import axios from 'axios';

export const login = async (data) => {
    try{
        const res = await axios.post('http://10.7.17.143:4500/students/login',
            data
        );
        return res.data;
    }
    catch(error) {
        //console.log("service login error:",error.response);
        return error.response.data.msg;
    }
}
export const register = async (data) => {
    try{
        const res = await axios.post('http://10.7.17.143:4500/students/register',
            data
        );
        console.log("registration successful:",res);
        return res.data;
    }
    catch(error) {
        //console.log("service register error:",error.response);
        return error.response.data.msg;
    }
}