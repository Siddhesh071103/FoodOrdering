import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [isGuest, setIsGuest] = useState(false); // Local state to track guest login

    const handleGuestLogin = () => {
        // Show alert
        Alert.alert(
            "Login Successful",
            "Logged in successfully as a guest.",
            [
                {
                    text: "OK",
                    onPress: () => {
                        setIsGuest(true); // Update the state if necessary
                        navigation.navigate('UserScreen'); // Navigate to the Splash screen
                    }
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <ImageBackground
            source={require('../assets/bgreg.png')}
            style={styles.background}
        >
            <View style={styles.center}>
                <View style={styles.margin}>
                    <Text style={styles.title}>Let's Sign you in.</Text>
                    <Text style={styles.subtitle}>Welcome back</Text>
                    {/* <Text style={styles.subtitle}>You've been missed!</Text> */}
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        placeholder='Enter a username'
                        placeholderTextColor='gray'
                        style={styles.borderInput}
                    />
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                placeholder='Enter a password'
                                placeholderTextColor='gray'
                                style={styles.borderInput}
                                secureTextEntry={true}
                            />
                            <Ionicons
                                style={styles.icon}
                                name="eye"
                                size={24}
                                color="grey"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.dividerContainer}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>or</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.alignbox}>
                    <TouchableOpacity style={styles.logo}>
                        <Image
                            source={{ uri: 'https://www.pngmart.com/files/16/Google-Logo-PNG-Image.png' }}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logo}>
                        <Image
                            source={{ uri: 'https://itcnet.gr/wp-content/uploads/2020/09/Linkedin-logo-on-transparent-Background-PNG--1024x1024.png' }}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logo}>
                        <Image
                            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/023/986/999/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png' }}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.guestButtonContainer} onPress={handleGuestLogin}>
                    <View style={styles.guestButton}>
                        <FontAwesome name="user" size={24} color="black" style={styles.guestIcon} />
                        <Text style={styles.guestButtonText}>Join as Guest</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.reg}>
                    <Text style={{ color: 'black', fontSize: 15 }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginButtonContainer}>
                    <View style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default Login;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    margin: {
        marginTop: 70,
        padding: 25,
    },
    title: {
        color: '#ea0028',
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 30,
    },
    inputContainer: {
        padding: 20,
    },
    label: {
        color: '#ea0028',
        fontSize: 12,
    },
    borderInput: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ea0028',
        width: '100%',
        height: 55,
        paddingLeft: 25,
        color: 'white',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        alignSelf: 'center',
        position: 'absolute',
        right: 10,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'gray',
    },
    orText: {
        marginHorizontal: 10,
        fontSize: 16,
        color: 'gray',
    },
    alignbox: {
        flexDirection: 'row',
        padding: 25,
        justifyContent: 'center',
        gap: 20,
    },
    logo: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ea0028',
        width: 60,
        height: 60,
    },
    image: {
        height: 45,
        width: 45,
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    reg: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registerText: {
        color: '#ea0028',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    loginButtonContainer: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: '#ea0028',
        borderRadius: 20,
        width: '75%',
        height: 50,
        justifyContent: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center',
    },
    guestButton: {
        marginTop: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(211, 211, 211, 0.5)', // Change to desired color
        borderWidth: 2,
        borderColor: '#ea0028',
        borderRadius: 20,
        width: '75%',
        height: 50,
        justifyContent: 'center',
    },
    guestButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10, // Space between icon and text
    },
    guestIcon: {
        alignSelf: 'center',
    },
});
