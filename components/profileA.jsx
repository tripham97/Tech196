import { Row } from "native-base";
import React, {useState} from "react";
import { View, Container, StyleSheet,Image, PixelRatio, Pressable, ScrollView} from "react-native";
import { Input,Icon,Button,Text } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';//packages

function ProfileCard(){
  return (
    <View style={{flexDirection:'row'}}>
        <View>
          <Text h4 style={{}}>@InvestorHandle</Text>
          <Pressable>
            {({ pressed }) => (
              <Text h4>
                {pressed ? "It's Tri Pham" : "Profile's Name"}
              </Text>
            )}
          </Pressable>
        </View>
        <View style={{marginLeft:50}}>
          <Ionicons name={'person-circle'} size={175} color={'grey'} />
        </View>
        
        
    </View>
  );
}

function ProfileScreen() {
    return (
      <ScrollView style={styles.container}>
        <ProfileCard />
        <View>
          <Text h3 >Funds Available</Text>
          <Text h3 >$10,000</Text>
        </View>
        <View>
          <Button title='Deposit'/>
        </View>
        <View>
          <Button title='Withdraw' style={{marginTop:10}}/>
        </View>

          <Text h3 style={{marginTop:20}}>Portfolio</Text>
          <Image source={require('../assets/pie.png')} resizeMode={'contain'} style={{width:'100%',height:400}}/>
      </ScrollView>
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