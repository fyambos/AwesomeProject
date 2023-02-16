import React, {useEffect,useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {getSessions} from '../services/sessions';
import {getClass} from '../services/classes';
import {getStudent} from '../services/students';

const Home = ({navigation, route}) => {
    const navLogin = () => {
        navigation.navigate('Login');
    }
    const { studentId } = route.params;
    if (typeof studentId === 'undefined') {
        navigation.navigate('Login');
    }
    else {
        const [sessions,setSessions]=useState([]);
        const [classe,setClass]=useState([]);
        const [classeId,setClasseId]=useState([]);
        useEffect(()=>{
            const getClasseId = async () => {
                const res = await getStudent(studentId);
                if (res.status < 200 || res.status >= 300) {
                    console.log("Error in Home.js : Code ",res.status, " - ",res.data.msg);
                }
                else {
                    setClasseId(res.classe);
                }
            }

            getClasseId();

            const getTodaySessions = async () => {
                            const res = await getSessions();
                            if (res.status < 200 || res.status >= 300) {
                                console.log("Error in Home.js : Code ",res.status, " - ",res.data.msg);
                            }
                            else {
                                setSessions(res);
                                console.log("setting sessions");
                            }
                        }
            getTodaySessions();

        },[]);
        console.log("Student: ",studentId);
        console.log("Classe: ",classeId);
        console.log("Sessions:",sessions);

        return <View>
            <Text>Liste des sessions</Text>
            <View>
            {sessions.map((session) => <Text key={session._id}>
               {session.matiere}
               </Text>
            )}
            <TouchableOpacity onPress={navLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
            </View>


        </View>
    }
}
export default Home;