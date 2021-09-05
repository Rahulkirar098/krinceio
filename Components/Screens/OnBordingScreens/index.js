import React from 'react'
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


export function OnBordingScreens({ navigation }) {
    return (
        <Onboarding
            onSkip={() => navigation.replace('login')}
            onDone={() => navigation.navigate('login')}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image style={{ width: 200, height: 200 }} source={require('../../Assets/logo1.png')} />,
                    title: 'Onboarding screen 1',
                    subtitle: 'screen 1',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={{ width: 200, height: 200 }} source={require('../../Assets/logo2.png')} />,
                    title: 'Onboarding screen 2',
                    subtitle: 'screen 2',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={{ width: 200, height: 200 }} source={require('../../Assets/logo3.png')} />,
                    title: 'Onboarding screen 3',
                    subtitle: 'screen 3',
                },
            ]}
        />
    )
}
