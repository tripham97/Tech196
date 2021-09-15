import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginForm from './components/login.jsx'
import PreLoginScreen from './components/prelogin.jsx';
import RegisterScreen from './components/register.jsx';
import HomeScreen from './components/home.jsx';
const Drawer = createDrawerNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      screenOptions={{
      headerStyle: {
    backgroundColor: 'transparent',
    height: 100
  },
    drawerStyle: {
      width: 240,
    },
  }}
      initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginForm} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    /*{ <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={PreLoginScreen} />
        <Stack.Screen name="Login Details" component={LoginForm} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer> }*/
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    flex: 1,
    //backgroundColor: '#A89954',
     alignItems: 'center'
  }  
});
