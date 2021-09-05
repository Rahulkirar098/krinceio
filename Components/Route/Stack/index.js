import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreens, LoginScreens, SignupScreen,OnBordingScreens } from "../../Screens";

const Stack = createNativeStackNavigator();

export function StackNavigation() {
    return (

        <Stack.Navigator
            initialRouteName="SplashScreens" headerMoad='none'>

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
}
