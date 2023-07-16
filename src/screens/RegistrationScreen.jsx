import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Image, TextInput, Text, TouchableOpacity, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import emptyAvatar from '../Image/emptyAvatar.png'

const RegistrationScreen = () => {
  const [login, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleRegistration = () => {
    console.log('Регістрація...');
  };

  const handleEnter = () => {
    console.log('Вхід...');
  };

  return (
    <TouchableWithoutFeedback >
      <KeyboardAvoidingView
        
        style={styles.container}
      >
        <View style={styles.avatar}>
          <Image source={emptyAvatar} style={styles.image} />
          <Svg style={styles.avatarIcon}>
            <Circle cx="12.5" cy="12.5" r="11" fill="white" stroke="#FF6C00" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="#FF6C00" />
          </Svg>
        </View>

        <Text style={styles.title}>Реєстрація</Text>

        <TextInput style={styles.input} onChangeLogin={setName} value={login} placeholder="Логін" />

        <TextInput style={styles.input} onChangeMail={setEmail} value={email} placeholder="Адреса електронної пошти" />

        <TextInput style={styles.input} onChangePassword={setPassword} value={password} placeholder="Пароль" />

        {!isKeyboardVisible && (
          <>
            <TouchableOpacity style={styles.btn} onPress={handleRegistration}>
              <Text style={styles.buttonTitle}>Зареєстуватися</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleEnter}>
              <Text style={styles.link}> Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        maxHeight: 500,
        // maxHeight: '66%',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 20,

        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // width: 200,
    },

    avatar: {
        position: "relative",
    },

    avatarIcon: {
        position: "absolute",
        width: 30,
        height: 30,
        right: -15,
        top: 70,
    },

    input: {
        width: 343,
        height: 50,
        margin: 8,
        borderWidth: 1,
        padding: 10,

        padding: 10,
        color: "#BDBDBD",
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 10,
    },

    title: {
        textAlign: "center",
        fontFamily: "Roboto-Medium",
        fontWeight: 500,
        fontSize: 30,
        marginBottom: 30,

    },

    link: {
        marginTop: 16,
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        color: "#1B4371",
    },

    btn: {
        // width: 345,

        marginTop: 30,
        backgroundColor: '#FF6C00',
        borderRadius: 100,

        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 111,
        paddingRight: 111,
    },

    buttonTitle: {
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        color: "#FFFFFF",
    },

    iconAdd: {
        width: 25,
        height: 25,
        color: "#1B4371",
    },

    image: {
        height: 120,
        width: 120,
        marginBottom: 32,
    }


});

export default RegistrationScreen;