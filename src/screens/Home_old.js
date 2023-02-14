import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';

const HomeOld = ({navigation}) => {
    const onPressHandler = () => {
        navigation.navigate('Chuck');
    }
    const onPressHandlerTwo = () => {
            navigation.navigate('Login');
    }
    //OLD LOGIN DEBUT
    const onClickHandler = (event) => {
            event.preventDefault();
            axios.post("http://192.168.0.50:4500/student/login", login, {
                withCredentials: true
            })
            .then(res => {
                if (res.status === 200) {
                    console.log("Login Successful");
                    console.log(res.data);
                } else {
                    console.log("Login Failed");
                    console.log(res.data);
                }
            })
            .catch(err => {
                console.log("Une erreur est survenue: " + err);
            });
        }
    //OLD LOGIN FIN

    return (
        <View>
            <Text>Chuck Page</Text>
            <TouchableOpacity onPress={onPressHandler}>
                <Text>Go To Chuck Page</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressHandlerTwo}>
                            <Text>Go To Login Page</Text>
            </TouchableOpacity>
        </View>
    )

}

export default HomeOld