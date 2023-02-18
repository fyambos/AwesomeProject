import axios from 'axios';
import ipAddress from '../config';

export const login = async (data) => {
    try{
        const res = await axios.post(`http://${ipAddress}/students/login`,
            data
        );
        return res.data;
    }
    catch(error) {
        return error;
    }
}
export const register = async (data) => {
    try{
        const res = await axios.post(`http://${ipAddress}/students/register`,
            data
        );
        //console.log("registration successful:",res); //dangerous log
        return res.data;
    }
    catch(error) {
        //console.log("service register error:",error.response);
        return error.response;
    }
}

export const getStudent = async (studentId) => {
    try{
        const res = await axios.get(`http://${ipAddress}/students/${studentId}`);
        return res.data;
    }
    catch(error) {
        return error.response;
    }
}
export const logout = async (data) => {
    try{
        const res = await axios.post(`http://${ipAddress}/students/logout`,
            data
        );
        return res.data;
    }
    catch(error) {
        return error;
    }
}