import React from 'react';
import { StyleSheet,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';//packages
import BidScreen from './components/bid.jsx';
import SearchScreen from './components/search.jsx';
import SellScreen from './components/sell.jsx';
import NotificationScreen from './components/notification.jsx';
import Profile from './components/profileA'
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Bid') {
              iconName = focused
                ? 'cart'
                : 'cart-outline';
            } else if (route.name === 'Sell') {
              iconName = focused ? 'pricetag' : 'pricetag-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#57b8ff',
          tabBarInactiveTintColor: 'gray',
        })}>

        <Tab.Screen name="Bid" component={BidScreen}/>
        <Tab.Screen name="Sell" component={SellScreen} />

        <Tab.Screen name="Search" component={SearchScreen} />

        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
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
