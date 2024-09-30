import { StyleSheet, Image, Text, TextInput, TouchableOpacity, ImageBackground, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../assets/bgreg.png')}
      style={styles.background}
    >
    <View style={styles.center}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
          <View style={{ width: 45, height: 45, borderRadius: 50, borderWidth: 1, borderColor: '#ea0028', backgroundColor: '#ed1d05' }}>
            <MaterialCommunityIcons name="keyboard-backspace" size={29} color="white" style={{ padding: 7 }} />
          </View>
        </TouchableOpacity>
      <View style={styles.margin}>
        <Text style={styles.title}>Join us today.</Text>
        <Text style={styles.subtitle}>Are you craving?</Text>
        {/* <Text style={styles.subtitle}>To have you here!</Text> */}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder='Enter a username'
          placeholderTextColor='grey'
          style={styles.borderInput}
        />
        <View style={{ marginTop: 15 }}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder='Enter an Email'
            placeholderTextColor='grey'
            style={styles.borderInput}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder='Enter a password'
              placeholderTextColor='grey'
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
      <View style={styles.reg}>
        <Text style={{ color: 'black', fontSize: 15 }}>Do you have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.registerText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButtonContainer}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Register</Text>
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
  },
  backButton: {
    position: 'absolute',
    padding: 20,
    zIndex: 1,
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
    color: 'black',
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
    marginTop: 10,
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
});
