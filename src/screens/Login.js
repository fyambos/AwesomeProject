import React, {useEffect,useState} from 'react';
import {View, Text, TextInput,TouchableOpacity, StyleSheet} from 'react-native';
import {login} from '../services/students'

const Login = ({navigation}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message, setMessage] = useState("");

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
      },
      input: {
        backgroundColor: '#E1E8ED',
        borderRadius: 9999,
        color: '#14171A',
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '80%',
        marginBottom: 20,
      },
      button: {
        backgroundColor: '#1da1f2',
        padding: 10,
        borderRadius: 50,
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
      },
      registerLink: {
        color: '#1da1f2',
        marginTop: 20,
        fontSize: 16,
        textDecorationLine: 'underline',
      },
    });


    const onPressRegister = () => {
      navigation.navigate('Register');
    }
    const onPressHandler = async () => {
      if (!email || email=="" || !password || password=="") {
        setMessage("Vous devez remplir tous les champs!");
      }
      else {
        setMessage("Connexion en cours...");
        const res = await login({
                          email,
                          password
                      });
          if(res instanceof Error) {
            if (res.message.includes("Network")){
                setMessage("Erreur de réseau, réessayez plus tard.");
                console.log(res);
                console.log("Docker est démarré? L'addresse de l'API est configurable dans /config.js.")
            } else {
                setMessage("Une erreur est survenue, réessayez plus tard.")
                console.log(res);
            }
          } else {
            if (res.status < 200 || res.status >= 300) {
              console.log("Error: Code ",res.status, " - ",res.data.msg);
              navigation.navigate('Login');
            }
            else {
              setMessage("Authentification réussie.");
              navigation.navigate('Home', { studentId: res._id });
            }
          }
      };
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