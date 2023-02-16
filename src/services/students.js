import axios from 'axios';

export const login = async (data) => {
    try{
        const res = await axios.post('http://192.168.0.50:4500/students/login',
            data
        );
        return res.data;
    }
    catch(error) {
        //console.log("service students.js error:",error.response.data.msg);
        return error.response;
    }
}
export const register = async (data) => {
    try{
        const res = await axios.post('http://192.168.0.50:4500/students/register',
            data
        );
        console.log("registration successful:",res);
        return res.data;
    }
    catch(error) {
        //console.log("service register error:",error.response);
        return error.response;
    }
}

export const getStudent = async (studentId) => {
    try{
        const res = await axios.get(`http://192.168.0.50:4500/students/${studentId}`);
        return res.data;
    }
    catch(error) {
        return error.response;
    }
}