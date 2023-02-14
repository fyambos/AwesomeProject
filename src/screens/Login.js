import React, {useEffect,useState} from 'react';
import {View, Text, TextInput,TouchableOpacity} from 'react-native';
import {login} from '../services/students'

const Login = ({navigation}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const onPressHandler = async (event) => {
        const res = await login({
            email,
            password
        });
    const studentId = res._id
    //console.log("Loggin successful")
    //console.log("Logged in",res);
    //console.log("Id Student",studentId);
    navigation.navigate('Home');
    }
    return (
        <View>
            <Text>Connexion</Text>
            <TextInput
                style={{backgroundColor: 'lightgrey', padding:0,margin:5}}
                type='email'
                name='email'
                placeholder="Entrez votre email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                secureTextEntry={true}
                style={{backgroundColor: 'lightgrey', padding:0,margin:5}}
                type='password'
                name='password'
                placeholder="Entrez votre mot de passe"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={onPressHandler}>
                <Text>Log in</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Login;