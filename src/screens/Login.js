import React, {useEffect,useState} from 'react';
import {View, Text, TextInput,TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
    const onPressHandler = () => {
        navigation.navigate('Home');
    }

    const [login,setLogin]=useState({
        email: "",
        password:"",
    });
    const onChangeHandler = (event) => {
            const {value,name} = event.target;
            setLogin({...login,[name]:value}); //recup login / patch juste l'objet a modifier name c'est le nom du champs qui peut etre email ou password
        }
    const onClickHandler = () => {
        try {
            const res = fetch("http://10.0.2.2:4500/students/login", {
                        method: "POST",
                        body: JSON.stringify(login),
                        credentials: "include" //pour axios, il faut with credentials a true sinon pas de cookies
            });
            if (res.status === 200) {
                        console.log("Login Successful");
                        console.log(res);
            } else {
                        console.log("Login Failed");
                        console.log(res);
           }
        } catch (e) {
            console.log("Une erreur est survenue: " + e);
        }
    }

    return (
        <View>
            <Text>Connexion</Text>
            <TouchableOpacity onPress={onPressHandler}>
                <Text>Go To Home Page</Text>
            </TouchableOpacity>
            <TextInput
                style={{backgroundColor: 'lightgrey', padding:0,margin:5}}
                type='email'
                name='email'
                onChangeText={(text) => setLogin({...login, email: text})}
                value={login.email}
            />
            <TextInput
                style={{backgroundColor: 'lightgrey', padding:0,margin:5}}
                type='password'
                name='password'
                onChangeText={(text) => setLogin({...login, password: text})}
                value={login.name}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={onClickHandler}>
                <Text>Log in</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Login