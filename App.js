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
      <ImageBackground source={require('./assets/splash.png')} style={styles.image}>
        <Image  style={styles.tinyLogo} source={require("./assets/logo.png")} />
        <Text numberOfLines={1} onPress={handlePress}>World’s Leading Startup Auction Platform </Text>
        <StatusBar style="auto" />
        <Text numberOfLines={1}>Find Your Next Company Here</Text>
        <View style={styles.glass}>
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
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#A89954',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    paddingTop: 50,
  },
  button: {
    paddingVertical: 100,
    flex: 1
    
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    width: 1000,
    opacity:1,
  },
  loginGroup:{
    paddingTop:50
  },
  glass:{
    opacity:.9
  }
});
