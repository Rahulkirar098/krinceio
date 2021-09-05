import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from "./Stack";

export function Route() {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}
