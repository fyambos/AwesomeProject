import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
    const onPressHandler = () => {
        navigation.navigate('Chuck');
    }
    return (
        <View>
            <Text>Chuck Page</Text>
            <TouchableOpacity onPress={onPressHandler}>
                <Text>Go To Chuck Page</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home