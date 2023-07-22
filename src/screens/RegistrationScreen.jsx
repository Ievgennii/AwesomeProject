import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
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

  const [showPassword, setShowPassword] = useState(false);
  const [isMailFocused, setIsMailFocused] = useState(false);
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);




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

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback >
      <KeyboardAvoidingView

        style={styles.container}
      >
        <View style={styles.avatar}>
          <Image source={emptyAvatar} style={styles.image} />
          <AntDesign name="pluscircleo" size={24} color="black" style={styles.avatarIcon}/>
          {/* <Svg style={styles.avatarIcon}>
            <Circle cx="12.5" cy="12.5" r="11" fill="white" stroke="#FF6C00" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="#FF6C00" />
          </Svg> */}
        </View>

        <Text style={styles.title}>Реєстрація</Text>

        <TextInput
          // style={styles.input}
          style={[
            styles.input,
            isLoginFocused && styles.inputFocused, // Применяем стиль для активного состояния
          ]}
          onChangeLogin={setName}
          value={login}
          placeholder="Логін"
          onFocus={() => setIsLoginFocused(true)} // Обработчик фокусировки
          onBlur={() => setIsLoginFocused(false)} />

        {/* <TextInput style={styles.input} onChangeMail={setEmail} value={email} placeholder="Адреса електронної пошти" /> */}
        <TextInput
          style={[
            styles.input,
            isMailFocused && styles.inputFocused, // Применяем стиль для активного состояния
          ]}
          value={email}
          onChangeMail={setEmail}
          placeholder="Адреса електронної пошти"
          onFocus={() => setIsMailFocused(true)} // Обработчик фокусировки
          onBlur={() => setIsMailFocused(false)} // Обработчик снятия фокуса
        />

        {/* <TextInput style={styles.input} onChangePassword={setPassword} value={password} placeholder="Пароль" /> */}

        <View
          // style={styles.inputContainer}
          style={[
            styles.inputContainer,
            isPasswordFocused && styles.inputContainerFocused, // Применяем стиль для активного состояния
          ]}
          onFocus={() => setIsPasswordFocused(true)} // Обработчик фокусировки
          onBlur={() => setIsPasswordFocused(false)} // Обработчик снятия фокуса
        >
          <TextInput
            style={styles.inputPassword}

            onChangeText={setPassword}
            value={password}
            placeholder="Пароль"
            secureTextEntry={!showPassword}

          />
          <TouchableOpacity style={styles.showPasswordButton} onPress={handleShowPassword}>
            <Text style={styles.showPasswordButtonText}>{showPassword ? 'Приховати' : 'Показати'}</Text>
          </TouchableOpacity>
        </View>


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
    color: "#FF6C00",
    width: 25,
    height: 25,
    right: -13,
    top: 70,
  },

  input: {
    width: 343,
    height: 50,
    margin: 8,
    borderWidth: 1,
    padding: 10,

    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
  },

  inputFocused: {
    borderColor: "#FF6C00", // Цвет бордера при фокусировке
    backgroundColor: "#FFF", // Цвет фона при фокусировке
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
  },


  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 343,
    height: 50,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 10,
  },

  inputContainerFocused: {
    borderColor: "#FF6C00", // Цвет бордера при фокусировке
    backgroundColor: "#FFF", // Цвет фона при фокусировке
  },

  inputPassword: {
    flex: 1,
    // padding: 10,
    // width: 343,
    // height: 50,
    // margin: 8,
    // borderWidth: 1,
    // padding: 10,
    // backgroundColor: "#F6F6F6",
    // borderColor: "#E8E8E8",
    // borderRadius: 10,
    // color: "#BDBDBD",
    height: 50,
    margin: 8,
  },

  inputPasswordFocused: {
    borderColor: "#FF6C00", // Цвет бордера при фокусировке
    backgroundColor: "#FFF", // Цвет фона при фокусировке
  },
  // showPasswordButton: {
  //   padding: 5,
  // },
  // showPasswordButtonText: {
  //   color: "#1B4371",
  // },


});

export default RegistrationScreen;