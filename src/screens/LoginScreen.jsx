import { useState, useEffect } from 'react';
import {
  Text, Button, TextInput,
  View, StyleSheet,
  TouchableOpacity, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';



const LoginScreen = () => {
  const [mail, setChangeMail] = useState('');
  const [password, setChangePassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const initialContainerHeight = 450;

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


  return (

    <TouchableWithoutFeedback >        

        <KeyboardAvoidingView
          
          style={containerStyle}>
            <Text style={styles.title}>Увійти</Text>
          
            <TextInput placeholder="Пошта" value={mail}
              onChangeNail={setChangeMail}
              style={styles.input} />

            <TextInput placeholder="Пароль" value={password}
              onChangeNail={setChangePassword}
              style={styles.input} />

          
        
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
});

export default LoginScreen;