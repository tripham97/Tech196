import React, {useState} from "react";
import { FlatList,Button,Image, View, SafeAreaView, StyleSheet} from "react-native";
import { Card, ListItem, Icon,Text } from 'react-native-elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { height } from "styled-system";

const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'Google',
    avatar: 'https://symbols.getvecta.com/stencil_82/45_google-icon.d8d982f8a1.svg'
  }
 ];


const ItemSeparator = () => {

  return (
    <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
  );
};
//GET RID OF HEADER TEXT ON NAVIGATionS
function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('BidScreen')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function CompanyCard(props) {
  return (<Card containerStyle={{backgroundColor:'grey'}}>
    <Card.Title style={{fontSize:25,color:'white'}}>{props.name}</Card.Title>
    <Card.Divider/>
    <Image source={require('../assets/techlogo.png')} style={{backgroundColor:'grey',resizeMode:'contain',width:'100%',height:75}}/>
    <Card.Image style={{backgroundColor:'grey'}}>
      <Text style={{color:'white',marginBottom: 10,marginTop:30}}>
        An innovative startup in medical technology based out of SugarLand,Texas. Top Startups in Texas.
      </Text>
      <Button
        icon={<Icon name='code' color='red' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='BID NOW' />
    </Card.Image>
  </Card>);
}

function CompanyList({navigation}){
  
  return (<SafeAreaView>
      <Text h3 style={{marginTop:10,textAlign:'center'}}>Current Offerings</Text>

      <FlatList
        data={[
          {key: 'Amazon'},
          {key: 'Google'},
          {key: 'Facebook'},
          {key: 'Netflix'},
          {key: 'Company 5'},
          {key: 'Company 6'},
          {key: 'Company 7'},
          {key: 'Company 8'},
          {key: 'Company 9'},
          {key: 'Company 10'},
        ]}
        
        renderItem={({item}) => <CompanyCard name={item.key} image={'https://symbols.getvecta.com/stencil_82/45_google-icon.d8d982f8a1.svg'}/>}
        separator={ItemSeparator}
      />
      </SafeAreaView>);
}

const Stack = createNativeStackNavigator();

function BidScreen({ navigation }) {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CompanyList}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        
      </Stack.Navigator>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
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
      alignSelf: 'center',
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
    btn:{
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginBottom:30,
      maxWidth: 500,
      minWidth:300,
      alignSelf: "center"
    },
    separator: {
      height: StyleSheet.hairlineWidth,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: 50,
      padding: 8,
    },
    MainContainer:
    {
     justifyContent: 'center',
     flex:1,
     margin: 10
    },
  });
 export default BidScreen;