import React, {useEffect,useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {getSessions,getTodaySessions,getCurrentSession} from '../services/sessions';
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
        const [todaySessions,setTodaySessions]=useState([]);
        const [currentSession,setCurrentSession]=useState([]);
        const [classe,setClass]=useState([]);
        const [studentName,setStudentName]=useState([]);
        const [classeId,setClasseId]=useState([]);
        const [classeLabel,setClasseLabel]=useState([]);

        useEffect(()=>{
            const getClasseId = async () => {
                try {
                    const res = await getStudent(studentId);
                    if (res.status < 200 || res.status >= 300) {
                        console.log("Error in Home.js : Code ",res.status, " - ",res.data.msg);
                    }
                    else {
                        setClasseId(res.classe._id); //if no class, add student to class
                        setClasseLabel(res.classe.label);
                        setStudentName(res.firstname);
                    }
                } catch (error) {
                    console.log('Error in Home.js', error);
                }
            }
            getClasseId();
            console.log(classeId);
            const fetchSessions = async () => {
                try {
                    const res_as = await getSessions();
                    if (res_as.status < 200 || res_as.status >= 300) {
                        console.log("Error in Home.js : Code ",res_as.status, " - ",res_as.data.msg);
                    } else {
                        setSessions(res_as);
                    }
                } catch (error) {
                    console.log('Error in Home.js', error);
                }
            }
            fetchSessions();
            const fetchTodaySessions = async () => {
                try {
                    const res_ts = await getTodaySessions(classeId);
                    if (res_ts.status < 200 || res_ts.status >= 300) {
                        console.log("Error in Home.js : Code ",res_ts.status, " - ",res_ts.data.msg);
                    }
                    else {
                        setTodaySessions(res_ts);
                    }
                } catch (error) {
                    console.log('Error in Home.js', error);
                }
            }
            fetchTodaySessions();
            const fetchCurrentSession = async () => {
                try {
                    const res_cs = await getCurrentSession(classeId);
                    if (res_cs.status < 200 || res_cs.status >= 300) {
                        console.log("Error fetching current session: Code ",res_cs.status, " - ",res_cs.request.responseURL,res_cs.data.error,res_cs.data.msg);
                        console.log("classeId currentsession;",classeId);
                    }
                    else {
                        setCurrentSession(res_cs);
                    }
                } catch (error) {
                    console.log('Error in Home.js', error);
                }
                
            }
            fetchCurrentSession();

        },[]);
        console.log("Student: ",studentName,studentId);
        console.log("Classe: ",classeLabel,classeId);
        console.log("Current Session:",currentSession);
        
        //console.log("Sessions:",sessions);

        return <View>
            <Text>Bonjour, {studentName}!</Text>
            {currentSession.matiere ? (
            <View>
                <Text>En cours</Text>
                <Text>{currentSession.matiere.label}</Text>
                <Text>{currentSession.start} - {currentSession.end}</Text>
            </View>
            ) : (
            <Text>Pas de cours actuellement</Text>
            )}
            <Text>Cours aujourd'hui</Text>
            <View>
            {/* 
            {sessions.map((session) => <Text key={session._id}>
               {session.matiere}
               </Text>
            )}
            */}
            <TouchableOpacity onPress={navLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
            </View>


        </View>
    }
}
export default Home;