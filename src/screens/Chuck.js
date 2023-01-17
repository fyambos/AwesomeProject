import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Chuck = ({navigation}) => {
    const onPressHandler = () => {
        navigation.navigate('Home');
    }
    return (
        <View>
            <Text>Home Page</Text>
            <TouchableOpacity onPress={onPressHandler}>
                <Text>Go To Home Page</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Chuck