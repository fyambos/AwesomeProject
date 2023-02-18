import {  StyleSheet  } from "react-native";

const styles = StyleSheet.create({
    'text': {
        'color':'blue',
        'backgroundColor':'silver'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '50%'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    title2: {
        fontSize: 20,
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

export default styles;