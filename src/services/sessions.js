import axios from 'axios';
import ipAddress from '../config';

export const getSessions = async () => {
    try{
        const res = await axios.get(`http://${ipAddress}/sessions`);
        //console.log("session.js getSession() status:",res.status);
        return res.data;
    }
    catch(error) {
        console.log("error",error);
        return error;
    }
};

export const getTodaySessions = async (classeId) => {
    try{
        const res = await axios.get(`http://${ipAddress}/sessions/today/${classeId}`);
        return res.data;
    }
    catch(error) {
        return error.response;
    }
}

export const getCurrentSession = async (classeId) => {
    try{
        const res = await axios.get(`http://${ipAddress}/sessions/current/${classeId}`);
        console.log(`http://${ipAddress}/sessions/current/${classeId}`);
        return res.data;
    }
    catch(error) {
        return error.response;
        console.log(`http://${ipAddress}/sessions/current/${classeId}`);

    }
}