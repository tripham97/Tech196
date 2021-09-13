import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function AboutUsScreen({ navigation }) {
  console.log("About Us Loaded");
  const handlePress = () => console.log("Text pressed");
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={require('../assets/splash.png')} style={styles.image}>
        <Image style={styles.tinyLogo} resizeMode={'cover'} source={require("../assets/logo.png")} />
        <Text style={{fontSize:18}}numberOfLines={1} onPress={handlePress}>World’s Leading Startup Auction Platform </Text>
        <Text numberOfLines={1} style={styles.subtext}>Find Your Next Company Here</Text>

        <View style={styles.loginGroup}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Login Details')}
            
          >
            <Text style={{fontSize:20}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Register')}
            ><Text style={{fontSize:20}}>Sign Up</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.loginGroup}>
            
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
  },
  btn:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom:30
  }
});

export default AboutUsScreen;