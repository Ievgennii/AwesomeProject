import { useState, useEffect } from 'react';
import {
  Text, TextInput,
  StyleSheet, View,
  TouchableOpacity, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';


const LoginScreen = () => {
  const [mail, setChangeMail] = useState('');
  const [password, setChangePassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const initialmarginTop = 200;

  const [showPassword, setShowPassword] = useState(false);
  const [isMailFocused, setIsMailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        const keyboardHeight = 140;
        setKeyboardHeight(keyboardHeight);
      }
      // (event) => {
      //   const keyboardHeight = event.endCoordinates.height;
      //   console.log(keyboardHeight)
      //   setKeyboardHeight(keyboardHeight);
      // }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const containerStyle = {
    ...styles.container,
    // maxHeight: initialContainerHeight - keyboardHeight
    marginTop: initialmarginTop - keyboardHeight
    // paddingBottom: initialContainerHeight + keyboardHeight
  };


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
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <KeyboardAvoidingView style={styles.view}>
      <View style={containerStyle}>
        <Text style={styles.title}>Увійти</Text>

        {/* <TextInput placeholder="Пошта" value={mail}
          onChangeNail={setChangeMail}
          style={styles.input} /> */}

        <TextInput
          style={[
            styles.input,
            isMailFocused && styles.inputFocused,
          ]}
          value={mail}
          onChangeMail={setChangeMail}
          placeholder="Пошта"
          onFocus={() => setIsMailFocused(true)}
          onBlur={() => setIsMailFocused(false)}
        />

        {/* <TextInput placeholder="Пароль" value={password}
              onChangeNail={setChangePassword}
              style={styles.input} /> */}

        <View
          // style={styles.inputContainer}
          style={[
            styles.inputContainer,
            isPasswordFocused && styles.inputContainerFocused,
          ]}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        >
          <TextInput
            style={styles.inputPassword}
            value={password}
            onChangeText={setChangePassword}
            placeholder="Пароль"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.showPasswordButton} onPress={handleShowPassword}>
            <Text style={styles.showPasswordButtonText}>{showPassword ? 'Скрыть' : 'Показать'}</Text>
          </TouchableOpacity>
        </View>

        {!isKeyboardVisible && (
          <>
            <TouchableOpacity style={styles.btn} onPress={handleEnter}>
              <Text style={styles.buttonTitle}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegistration}>
              <Text style={styles.link} >Немає акаунту? Зареєструватися</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  view: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    position: "relative",
    flex: 1,
    // maxHeight: 450,
    // maxHeight: '66%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    marginBottom: 50,

  },
  input: {
    // width: 343,
    width: '96%',
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
    borderColor: "#FF6C00",
    backgroundColor: "#FFF",
  },

  btn: {
    width: '96%',
    marginTop: 43,
    marginBottom: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 111,
  },

  buttonTitle: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },

  link: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: 343,
    height: 50,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 10,
  },

  inputContainerFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFF",
  },

  inputPassword: {
    flex: 1,
    // padding: 10,
    // color: "#BDBDBD",
    height: 50,
    margin: 8,
  },

  showPasswordButton: {
    padding: 5,
  },

  showPasswordButtonText: {
    color: "#1B4371",
  },


});

export default LoginScreen;