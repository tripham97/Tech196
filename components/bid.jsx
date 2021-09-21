import React, {useState} from "react";
import { FlatList, View, Container,Text, StyleSheet} from "react-native";
import { SearchBar } from 'react-native-elements';

export default class BidScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </View>
    );
  }
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
    }
  });
