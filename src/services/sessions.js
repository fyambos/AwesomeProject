import axios from 'axios';

export const getSessions = async () => {
    try{
        const res = await axios.get('http://10.7.17.143:4500/sessions');
        //console.log("session.js getSession() status:",res.status);
        return res.data;
    }
    catch(error) {
        console.log("error",error);
        return error;
    }
};
