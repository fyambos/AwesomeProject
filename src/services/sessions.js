import axios from 'axios';

export const getSessions = async () => {
    try{
        const res = await axios.get('http://192.168.0.50:4500/sessions');
        //console.log("session.js getSession() status:",res.status);
        return res.data;
    }
    catch(error) {
        console.log("error",error);
        return error;
    }
};
