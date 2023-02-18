import React, {useEffect,useState} from 'react';
import {View, Text, TextInput,TouchableOpacity} from 'react-native';
import {login, register} from '../services/students'
import styles from '../style/global';

const Register = ({navigation}) => {
    const [email,setEmail] = useState("");
    const [email_cfg,setEmailCFG] = useState("");
    const [password,setPassword] = useState("");
    const [password_cfg,setPasswordCFG] = useState("");
    const [studentId, setStudentId] = useState("");
    const [message, setMessage] = useState("");

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
            if(reg instanceof Error) {
                if (reg.message.includes("Network")){
                    setMessage("Erreur de réseau, réessayez plus tard.");
                    console.log(reg);
                    console.log("Docker est démarré? L'addresse de l'API est configurable dans /config.js.")
                } else if (reg?.response?.data?.msg ?? null) {
					setMessage(reg.response.data.msg);
                } else {
                    setMessage("Une erreur est survenue, réessayez plus tard.");
					console.log(reg);
                }
            } else {     
                    setMessage("Inscription réussie.");
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
            console.log(error);
            setMessage("Une erreur est survenue, réessayez plus tard.");
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inscription</Text>
            <TextInput
                style={styles.input}
                type='email'
                name='email'
                placeholder="Entrez votre email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                type='email'
                name='email_cfg'
                placeholder="Confirmez votre email"
                onChangeText={setEmailCFG}
                value={email_cfg}
            />
            <TextInput
                style={styles.input}
                type='password'
                name='password'
                placeholder="Entrez votre mot de passe"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                type='password'
                name='password_cfg'
                placeholder="Confirmez votre mot de passe"
                onChangeText={setPasswordCFG}
                value={password_cfg}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={onPressLogin}>
                <Text style={styles.registerLink}>Déjà un compte? Se connecter</Text>
            </TouchableOpacity>
            {message !== "" && <Text>{message}</Text>}
        </View>
    );
}
export default Register;
