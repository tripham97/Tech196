import React, {useState} from "react";
import { View, Image,Text, StyleSheet} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Input,Icon,Button } from 'react-native-elements';


function SellScreen() {

    return (
      <View style={{backgroundColor:'#f5f5f5',flex:1}}>
        <View style={{marginHorizontal:10}}>
          <Image source={require('../assets/techlogo.png')} style={{backgroundColor:'#f5f5f5',resizeMode:'contain',width:'100%',height:75,marginTop:15}}/>
          <Text style={styles.text}>Want to sell?</Text>
          <Text style={{marginBottom:50,fontSize:25}}>Contact us for more info.</Text>
          <Input
            placeholder='Name'
          /><Input
            placeholder='Email'
          /><Input
            inputStyle={{'color':'red'}}
            placeholder='Phone Number'
          /><Input
            placeholder='Company Website'
          /><Input
            placeholder='Notes'
          /><Button title='Contact Us' />
        </View>
      </View>
          );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#efeff0',
    },
    tinyLogo: {
        flex:0,
        alignSelf: 'center',
        marginBottom:20,
        marginLeft:15
      },
    scrollView: {
      backgroundColor: '#efefee',
      marginHorizontal: 0,
    },
    text: {
      alignSelf: 'flex-start',
      fontSize: 42
    },
    image: {
        flex: 1,
        height:1000
        //alignItems: 'center',
        //justifyContent: "space-between",
        //width: 1000,
      },
    picker:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      backgroundColor:'white',
      padding: 10,  
      borderColor:'#4b74a8',
      maxWidth: 500,
      minWidth:300,
      alignSelf:'center'
    },
    textIn:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor:'white',
      borderColor:'#4b74a8',
      maxWidth: 500,
      minWidth:300,
      alignSelf:'center'
    },
    btn:{
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginBottom:30,
      maxWidth: 500,
      minWidth:300,
      alignSelf: "center"
    }
  });

export default SellScreen;