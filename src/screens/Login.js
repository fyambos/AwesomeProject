import React, {useEffect,useState} from 'react';
import {View, Text, TextInput,TouchableOpacity} from 'react-native';
import {login} from '../services/students'

const Login = ({navigation}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [studentId, setStudentId] = useState("");
    const onPressRegister = () => {
      navigation.navigate('Register');
    }
    const onPressHandler = async () => {

        try {
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
        } catch (error) {
          console.log('Login error:', error);
          console.log('Is Docker running? Run \'ipconfig\' and change the ip of the api');
        }
      };

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
            <TouchableOpacity onPress={onPressRegister}>
                <Text>Pas de compte? S'inscrire</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Login;