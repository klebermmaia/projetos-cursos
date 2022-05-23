/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#c9d1d9';
const colorFontDarkGitHub = '#4f565e';
const imgProfileGitHub = 'https://avatars.githubusercontent.com/u/42123079?v=4';
const urlMyProfile = 'https://github.com/klebermmaia';
const App = ()=> {
  const handPressGoToGithub = async ()=>{
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlMyProfile);
    if (res){
    console.log('Link aprovado');
      await Linking.openURL(urlMyProfile);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content"/>
      <View style={style.content}>
        <Image style={style.avatar} source={{uri:imgProfileGitHub}}/>
        <Text accessibilityLabel="Nome: Kleber maia" style={[style.defaultText, style.name]}>Kleber Maia</Text>
        <Text accessibilityLabel="Nickname: KleberMaia" style={[style.defaultText, style.nikename]}>KleberMaia</Text>
        <Text style={[style.defaultText, style.description]}>Descrição: blablablablablabla blablablabla blablablablablablablablablablablabla blablablabla blablablablablabla</Text>
      <Pressable onPress={handPressGoToGithub}>
        <View style={[style.button]}>
          <Text style={[style.defaultText, style.textButton]}>Open in github</Text>
        </View>
      </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1,
    justifyContent: 'center',
  },
  content:{
    alignItems: 'center',
    padding: 20,
  },
  avatar:{
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText:{
    color: colorFontGitHub,
  },
  name:{
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
  nikename:{
    fontSize: 18,
    color: colorFontDarkGitHub,
    paddingBottom: 10,
  },
  description:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor:colorFontDarkGitHub,
    padding: 20,
    borderRadius: 14,
    marginTop: 20,
  },
  textButton:{
    fontWeight: 'bold',
    fontSize: 16,
  },
});
