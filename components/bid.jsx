import React, {useState} from "react";
import { FlatList,Button, View, Container,Text, StyleSheet} from "react-native";
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from "react-native-gesture-handler";
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
function CompanyList({navigation}){
  const [search, setSearch] = useState('');

  return (<ScrollView>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={search}
      />
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

        renderItem={({item}) => <Text style={styles.item} onPress={() => {navigation.navigate('Details', {data: item})}}>{item.key}</Text>}
        separator={ItemSeparator}
      />
      </ScrollView>);
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
        <Stack.Screen name="Details" component={DetailsScreen} />
        
      </Stack.Navigator>);
}

function CompanyDetails()
{
  navigationOptions =
  {
     title: 'Company Details',
  };
 
  return(
    <View style = { styles.MainContainer }>

        <Text style = { styles.TextStyle }> { this.props.navigation.state.params.ListViewClickItemHolder } </Text>

    </View>
  );
}

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