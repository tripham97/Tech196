import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './components/register.jsx'
import PreLoginScreen from './components/prelogin.jsx';
const Stack = createNativeStackNavigator();

function RegisterScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Register Screen</Text>
      <Text>This is where the details for your registration will be input</Text>
    </View>
  );
}

function LoginDetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Details Screen</Text>
    </View>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={PreLoginScreen} />
        <Stack.Screen name="Login Details" component={LoginDetailsScreen} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#A89954',
     alignItems: 'center'
  }  
});
