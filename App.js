import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, ImageBackground, Keyboard} from 'react-native';
import RegistrationScreen from './src/screens/RegistrationScreen'
import LoginScreen  from './src/screens/LoginScreen';
import backgroundPhoto from './src/Image/Background.png'
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container} >
      <StatusBar style="auto" />

      <ImageBackground source={backgroundPhoto} resizeMode="cover" style={styles.image}>
        <View style={styles.wrapper}>

          {/* <RegistrationScreen/> */}
          <LoginScreen />
        </View>


      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {

    position: "relative",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',

  },
  
});