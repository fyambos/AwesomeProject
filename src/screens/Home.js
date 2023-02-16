import React, {useEffect,useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {getSessions} from '../services/sessions';

const Home = ({navigation, route}) => {
    const navLogin = () => {
        navigation.navigate('Login');
    }
    const { studentId } = route.params;
    console.log("Student: ",studentId);
    const [sessions,setSession]=useState([]);

    useEffect(()=>{
        const getData = async () => {
            const res = await getSessions();
            console.log("Home.js useEffect() res:",res);
            if (typeof res !== 'undefined')
                setSession(res);
        }

        getData();
    },[])

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
export default Home;