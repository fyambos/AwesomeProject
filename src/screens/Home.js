import React, {useEffect,useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../style/global';

import {getSessions,getTodaySessions,getCurrentSession} from '../services/sessions';
import {getClass} from '../services/classes';
import {getStudent,logout} from '../services/students';

const Home = ({navigation, route}) => {
    function formatSessionTime(sessionTime, hourOnly=false) {
        const now = new Date();
        const sessionDate = new Date(sessionTime);
        
        const isToday = now.toDateString() === sessionDate.toDateString();
        const isTomorrow = now.getDate() + 1 === sessionDate.getDate() && now.getMonth() === sessionDate.getMonth() && now.getFullYear() === sessionDate.getFullYear();
        const isThisYear = now.getFullYear() === sessionDate.getFullYear();
        const isNextYear = now.getFullYear() + 1 === sessionDate.getFullYear();
        
        let dateString;
        if (isToday || hourOnly) {
            const options = {hour: 'numeric', minute: 'numeric', hour12: false };
            dateString = sessionDate.toLocaleTimeString('fr-FR', options);
            dateString = dateString.replace(/:00$/, 'h').replace(":", 'h');
        } else if (isTomorrow) {
            dateString = "Demain à "+dateString.replace(/:00$/, 'h').replace(":", 'h');
        } else if (isThisYear) {
            const options = { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric', hour12: false };
            dateString = sessionDate.toLocaleDateString('fr-FR', options);
            dateString = dateString.replace(/:00$/, '');
        } else if (isNextYear) {
            const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
            dateString = sessionDate.toLocaleDateString('fr-FR', options);
            dateString = dateString.replace(/:00$/, '');
        } else {
            const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
            dateString = sessionDate.toLocaleDateString('fr-FR', options);
            dateString = dateString.replace(/:00$/, '');
        }
        
        return dateString;
    }
    const navLogin = async () => {
        const res = await logout();
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
                    console.log("Try adding the student to a class in Profile.js")
                }
            };
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
            };
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
            };
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
                
            };
            fetchCurrentSession();

        },[classeId]);
        console.log("Student: ",studentName,studentId);
        console.log("Classe: ",classeLabel,classeId);
        console.log("Current Session:",currentSession);
        console.log("Today's Sessions:",todaySessions);
        
        //console.log("Sessions:",sessions);

        //make card style for the 'En cours' view
        return <View style={styles.container}>
            {studentName && (
                <Text style={styles.title}>Bonjour {studentName}!</Text>
            )}
            {currentSession.matiere ? (
                <View style={styles.container}>
                    <Text style={styles.title2}>Marquer sa présence</Text>
                    <Text>{currentSession.matiere.label}</Text>
                    <Text>De {formatSessionTime(currentSession.start)} à {formatSessionTime(currentSession.end)}</Text>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText} >Valider</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.title2}>Pas de cours actuellement</Text>
                </View>
            )}
            {todaySessions.results ? (
            <View style={styles.container}>
                <Text style={styles.title2}>Aujourd'hui</Text>
                {todaySessions.results.map((session) => (
                <Text key={session._id}>
                    {session.matiere.label} - {formatSessionTime(session.start, hourOnly=true)}
                </Text>
                ))}
            </View>
            ) : (
                <View style={styles.container}>
                    <Text>Pas de cours aujourd'hui</Text>
                </View>
            )}
        {/*
            <View>
            {sessions.map((session) => <Text key={session._id}>
            {session.matiere}
            </Text>
            )}
            </View>
        */}
            <View style={[styles.container,styles.navbar]}>
                <TouchableOpacity style={[styles.button, { marginRight: 10 }]} onPress={navLogin}>
                    <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={navLogin}>
                    <Text style={styles.buttonText}>Déconnexion</Text>
                </TouchableOpacity>
            </View>


        </View>
    }
}
export default Home;