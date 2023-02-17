import React, {useEffect,useState} from 'react';
import {View, Text, TextInput,TouchableOpacity} from 'react-native';
import {login, register} from '../services/students'

const Register = ({navigation}) => {
    const [email,setEmail] = useState("");
    const [email_cfg,setEmailCFG] = useState("");
    const [password,setPassword] = useState("");
    const [password_cfg,setPasswordCFG] = useState("");
    const [studentId, setStudentId] = useState("");
    const onPressLogin = () => {
        navigation.navigate('Login');
      }
    const onPressHandler = async () => {

        try {
          const reg = await register({
                          email,
                          email_cfg,
                          password,
                          password_cfg

                      });
          if (reg.status < 200 || reg.status >= 300) {
            console.log("Error: Code ",reg.status, " - ",reg.data.msg);
          }
          else {
            console.log("Inscription réussie.")

            //Connexion automatique:
            const res = await login({
                email,
                password
            });
            if (res.status < 200 || res.status >= 300) {
                console.log("Error: Code ",res.status, " - ",res.data.msg);
                navigation.navigate('Login');
            }
            else {
                console.log("Authentification réussie.")
                setStudentId(res._id);
                navigation.navigate('Home', { studentId: studentId });
            }
          }


        } catch (error) {
          console.log('Registration error:', error);
          console.log('Is Docker running? Is the IP @ correct? Run \'ipconfig\' and update the ip of the api in /config.js');
        }
      };

    return (
        <View>
            <Text>Inscription</Text>
            <TextInput
                style={{backgroundColor: 'lightgrey', padding:0,margin:5}}
                type='email'
                name='email'
                placeholder="Entrez votre email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={{backgroundColor: 'lightgrey', padding:0,margin:5}}
                type='email'
                name='email_cfg'
                placeholder="Confirmez votre email"
                onChangeText={setEmailCFG}
                value={email_cfg}
            />
            <TextInput
                style={{backgroundColor: 'lightgrey', padding:0,margin:5}}
                type='password'
                name='password'
                placeholder="Entrez votre mot de passe"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <TextInput
                style={{backgroundColor: 'lightgrey', padding:0,margin:5}}
                type='password'
                name='password_cfg'
                placeholder="Confirmez votre mot de passe"
                onChangeText={setPasswordCFG}
                value={password_cfg}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={onPressHandler}>
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressLogin}>
                <Text>Déjà un compte? Se connecter</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Register;