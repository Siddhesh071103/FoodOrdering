import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        },3000);

        return () => clearTimeout(timer); // Clean up timer on component unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <LottieView
                source={require('../assets/Splash (2).json')}
                autoPlay
                loop
                style={styles.animation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    animation: {
        alignSelf: 'center',
        marginBottom: 35,
        width: 500,
        height: 500,
    },
});
