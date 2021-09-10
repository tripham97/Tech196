import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, Image, SafeAreaView, ImageBackground } from 'react-native';
//import {BlurView} from '@react-native-community/blur';
//import LinearGradient from 'react-native-linear-gradient';

const image = { uri: 'https://www.tech196.com/front_side/images/mainbanner.jpg' };
//view -> UIView
export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("Text pressed");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={require('./assets/splash.png')} style={styles.image}>
        <Image style={styles.tinyLogo} resizeMode={'cover'} source={require("./assets/logo.png")} />
        <Text style={{fontSize:18}}numberOfLines={1} onPress={handlePress}>World’s Leading Startup Auction Platform </Text>
        <Text numberOfLines={1} style={styles.subtext}>Find Your Next Company Here</Text>

        <View style={styles.loginGroup}>
          <Button
            style={styles.button}
            onPress={handlePress}
            title="Login"
            color="#4b74a8"
            accessibilityLabel="Login"
          />
        </View>
        <View style={styles.loginGroup}>
            <Button
            style={styles.button}
            onPress={handlePress}
            title="Sign Up"
            color="#4b74a8"
            accessibilityLabel="Sign Up"
            />
        </View>
      
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#A89954',
     alignItems: 'center'
  },
  tinyLogo: {
    flex:0,
    width:200,
    paddingTop: 50,
    marginBottom:50,
    marginTop:100,
  },
  button: {
    //paddingVertical: 100,
    marginBottom:30
    
    
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    width: 1000,
  },
  loginGroup:{ 
    margin: 10,
    paddingTop:0,
    paddingBottom:0,
    flex:1,
    width:300
  },
  subtext:{
    marginBottom:200,
    marginTop:80,
    fontSize:20
  }
});
