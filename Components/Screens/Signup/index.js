import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'


export function SignupScreen({navigation}) {

    return (

        <View style={styles.container}>
            <Text style={styles.title}>SignUp Screens</Text>
            <TouchableOpacity >
            <Text style={{fontSize:25,color:'blue'}} onPress={()=>{navigation.navigate('login')}} >Login</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    }
})