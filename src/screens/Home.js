import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
    const onPressHandler = () => {
        navigation.navigate('Chuck');
    }
    const onPressHandlerTwo = () => {
            navigation.navigate('Login');
    }
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
export default Home