import axios from 'axios';

export const getClasses = async () => {
    try{
        const res = await axios.get('http://192.168.0.50:4500/classes');
        return res.data;
    }
    catch(error) {
        console.log("error",error);
        return error;
    }
};

export const getClass = async (studentId) => {
    try{
        const res = await axios.get(`http://192.168.0.50:4500/classes/${studentId}`);
        return res.data;
    }
    catch(error) {
        return error.response;
    }
}