import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    //Liga flash do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subScription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
      return () => subScription.remove();
    });
  });

  return (
    <SafeAreaView style={toggle ? style.containerLight : style.containerDark}>
      <StatusBar
        backgroundColor={toggle ? 'white' : 'black'}
        barStyle={toggle ? 'dark-content' : 'light-content'}
      />
      <View>
        <TouchableOpacity onPress={handleChangeToggle}>
          <Image
            style={[toggle ? style.lightingOn : style.lightingOff]}
            source={
              toggle
                ? require('./assets/icons/eco-light.png')
                : require('./assets/icons/eco-light-off.png')
            }
          />
          <Image
            style={[style.dioLogo]}
            source={
              toggle
                ? require('./assets/icons/logo-dio.png')
                : require('./assets/icons/logo-dio-white.png')
            }
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  containerDark: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
