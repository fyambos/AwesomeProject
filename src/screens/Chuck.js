import React, {useEffect,useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Chuck = ({navigation}) => {
    const onPressHandler = () => {
        navigation.navigate('Home');
    }

    const [fact, setFact] = useState(null)

    getChuckFact = async () => {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const chuckFact = await res.json();
        console.log(res);
        console.log(chuckFact);
        setFact(chuckFact.value);
    }

    useEffect(()=> {
        getChuckFact();
    
    }, []);

    return (
        <View>
            <Text>Home Page</Text>
            <TouchableOpacity onPress={onPressHandler}>
                <Text>Go To Home Page</Text>
            </TouchableOpacity>
            <Text>{fact}</Text>
        </View>
    )
}
export default Chuck