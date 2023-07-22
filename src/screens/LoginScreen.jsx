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
  const initialContainerHeight = 450;

  const [showPassword, setShowPassword] = useState(false);
  const [isMailFocused, setIsMailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        const keyboardHeight = 200;
        setKeyboardHeight(keyboardHeight);
      }
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
    maxHeight: initialContainerHeight - keyboardHeight
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

    <TouchableWithoutFeedback >

      <KeyboardAvoidingView

        style={containerStyle}>
        <Text style={styles.title}>Увійти</Text>

        {/* <TextInput placeholder="Пошта" value={mail}
          onChangeNail={setChangeMail}
          style={styles.input} /> */}

<TextInput
  style={[
    styles.input,
    isMailFocused && styles.inputFocused, // Применяем стиль для активного состояния
  ]}
  value={mail}
  onChangeMail={setChangeMail}
  placeholder="Пошта"
  onFocus={() => setIsMailFocused(true)} // Обработчик фокусировки
  onBlur={() => setIsMailFocused(false)} // Обработчик снятия фокуса
/>


        {/* <TextInput placeholder="Пароль" value={password}
              onChangeNail={setChangePassword}
              style={styles.input} /> */}

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
            value={password}
            onChangeText={setChangePassword}
            placeholder="Пароль"
            secureTextEntry={!showPassword} // Используйте secureTextEntry, чтобы скрывать пароль
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  );

}

const styles = StyleSheet.create({

  container: {
    position: "relative",
    flex: 1,
    maxHeight: 450,
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
    marginBottom: 30,

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
  
  btn: {
    width: 345,

    marginTop: 43,
    marginBottom: 16,
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