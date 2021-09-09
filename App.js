import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, Image, SafeAreaView, ImageBackground } from 'react-native';

//view -> UIView
export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("Text pressed");

  return (
    <View style={styles.container}>
      <Image  style={styles.tinyLogo} source={require("./assets/logo.png")} />
      <Text numberOfLines={1} onPress={handlePress}>World’s Leading Startup Auction Platform </Text>
      <StatusBar style="auto" />
      <Text numberOfLines={1}>Find Your Next Company Here</Text>
      
      <View>
        <Button
          style={styles.button}
          onPress={handlePress}
          title="Login"
          color="#4b74a8"
          accessibilityLabel="Login"
        />
        <Button
        style={styles.button}
        onPress={handlePress}
        title="Sign Up"
        color="#4b74a8"
        accessibilityLabel="Sign Up"
      />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    paddingTop: 50,
  },
  button: {
    paddingVertical: 100,
    flex: 1
    
  }
});
