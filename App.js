import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground } from 'react-native';

//view -> UIView
export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("Text pressed");

  return (
    <View style={styles.container}>
      <Image  style={styles.tinyLogo} source={require("./assets/logo.png")} />
      <Text numberOfLines={1} onPress={handlePress}>World’s Leading Startup Auction Platform </Text>
      <StatusBar style="auto" />
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
});
