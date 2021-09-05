import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";


export function SplashScreens({ navigation }) {

    const onbording = 'onbording'

    const login = 'login'

    const [isTrue, setIsTrue] = useState()


    useEffect(() => {
        AsyncStorage.getItem('launched').then(value => {
            if (value === null) {
                setIsTrue(true)
            } else {
                setIsTrue(false)
            }
        })
    }, [])

    setTimeout(() => { navigation.replace(isTrue === true ? onbording : login) }, 3000)

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