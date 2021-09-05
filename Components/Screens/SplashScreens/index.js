import React from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'


export function SplashScreens({navigation}) {

    setTimeout(() => { navigation.replace('onbording') }, 3000)

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Krince io</Text>
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
        fontSize: 50,
    }
})