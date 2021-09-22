import { Row } from "native-base";
import React, {useState} from "react";
import { View, Container, StyleSheet,Image, PixelRatio} from "react-native";
import { Input,Icon,Button,Text } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';//packages

function ProfileCard(){
  return (
    <View style={{flexDirection:'row'}}>
        <View>
          <Text h1 style={{}}>Profile</Text>
          <Text h4 style={{}}>@InvestorHandle</Text>
        </View>
        <View style={{marginLeft:60}}>
          <Ionicons name={'person-circle'} size={175} color={'grey'} />
        </View>
        
        
      </View>
  );
}

function ProfileScreen() {

    return (
      <View style={styles.container}>
        <ProfileCard />
        <View><Text h3 >Funds Available</Text>
        <Text h3 >$10,000</Text></View>
        <View style={{flexDirection:'row'}}><Button title='Deposit' />
        <Button title='Withdraw'/></View>

        <Text h3 style={{marginTop:20}}>Portfolio</Text>
        <Image source={require('../assets/pie.png')} resizeMode={'contain'} style={{width:'100%',height:400}}/>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 15,
      marginHorizontal: 15
    },
  });

export default ProfileScreen;