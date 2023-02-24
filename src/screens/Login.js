import React, {useEffect,useState} from 'react';
import {View, Text, TextInput,TouchableOpacity, StyleSheet} from 'react-native';
import {login} from '../services/students'
import styles from '../style/global';

const Login = ({navigation}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message, setMessage] = useState("");

    const onPressRegister = () => {
        navigation.navigate('Register');
    }
    const onPressHandler = async () => {
		try {
            setMessage("Connexion en cours...");
            //Connexion
            const res = await login({
                email,
                password
            });
            if(res instanceof Error) {
                if (res.message.includes("Network")){
                    setMessage("Erreur de réseau, réessayez plus tard.");
                    console.log(res);
                    console.log("Docker est démarré? L'addresse de l'API est configurable dans /config.js.")
				} else if (res?.response?.data?.msg ?? null) {
					setMessage(res.response.data.msg);
                } else {
                    setMessage("Une erreur est survenue, réessayez plus tard.");
					console.log(res);
                }
            } else {
				setMessage("Authentification réussie.");
                //navigation.navigate('Home', { studentId: res._id });
                navigation.navigate('AppScreen', { studentId: res._id });
            }
		} catch(error) {
			console.log(error);
			setMessage("Une erreur est survenue, réessayez plus tard.");
		}
    }
      
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connectez-vous à vôtre compte</Text>
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
                type='password'
                name='password'
                placeholder="Entrez votre mot de passe"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                <Text style={styles.buttonText}>Connexion</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressRegister}>
                <Text style={styles.registerLink}>Pas de compte? S'inscrire</Text>
            </TouchableOpacity>
            {message !== "" && <Text>{message}</Text>}
        </View>
    );
}
export default Login;