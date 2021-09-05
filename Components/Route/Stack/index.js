import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreens, LoginScreens, SignupScreen, OnBordingScreens } from "../../Screens";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export function StackNavigation() {
    const [inFristLaunched, setInFristLaunched] = useState(null)

    useEffect(() => {
        AsyncStorage.getItem("launched").then(value => {
            if (value === null) {
                setInFristLaunched(true)
            } else {
                setInFristLaunched(false)
            }
        })

    }, [])

    if (inFristLaunched === null) {
        return null;
    } else if (inFristLaunched === true) {
        return (

            <Stack.Navigator
                initialRouteName="SplashScreens">

                <Stack.Screen name="SplashScreens" component={SplashScreens}
                    options={{ headerShown: false }} />

                <Stack.Screen name="onbording" component={OnBordingScreens}
                    options={{ headerShown: false }} />

                <Stack.Screen name="login" component={LoginScreens}
                    options={{ headerShown: false }} />

                <Stack.Screen name="signup" component={SignupScreen}
                    options={{ headerShown: false }} />

            </Stack.Navigator>

        )
    } else {
        return (
            <Stack.Navigator
                initialRouteName="SplashScreens">

                <Stack.Screen name="SplashScreens" component={SplashScreens}
                    options={{ headerShown: false }} /> 

                <Stack.Screen name="login" component={LoginScreens}
                    options={{ headerShown: false }} />

                <Stack.Screen name="signup" component={SignupScreen}
                    options={{ headerShown: false }} />

            </Stack.Navigator>
        )
    }


}
