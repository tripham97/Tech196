import React, {useState} from "react";
import { Image,ImageBackground,ScrollView,Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {Picker} from '@react-native-picker/picker';

const HomeScreen = () => {
  const [sector, setSector] = useState();
  const [stage, setStage] = useState();
  const [auction, setAuction] = useState();
  const [country, setCountry] = useState();

    return (
        <SafeAreaView style={styles.container}>
        <Image style={styles.tinyLogo} resizeMode={'cover'} source={require("../assets/logo.png")} />
            <ScrollView style={styles.scrollView}>
                <ImageBackground source={require('../assets/splash.png')} style={styles.image}>
                    <Text style={{ color:'#404040',textAlign: 'center',fontSize:35,}}>World's Leading Startup Auction Platform
                    </Text>
                    <Text style={{alignSelf:'center',fontSize:30,color:'black',marginTop:30,marginBottom:50}}>
                    Find Your Next <Text style={{color:'#4b74a8'}}>Company</Text> Here
                    </Text>
                    <Picker
                      style={styles.picker}
                      selectedValue={sector}
                      onValueChange={(itemValue, itemIndex) =>
                        setSector(itemValue)
                      }>
                      <Picker.Item label="Select Sector" value="" />
                      <Picker.Item label="AgriTech" value="agritech" />
                      <Picker.Item label="BioTech" value="biotech" />
                    </Picker>
                    <Picker
                      selectedValue={stage}
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) =>
                        setStage(itemValue)
                      }>
                      <Picker.Item label="Select Stage" value="" />
                      <Picker.Item label="Idea" value="idea" />
                      <Picker.Item label="POC" value="poc" />
                      <Picker.Item label="Seed" value="seed" />
                    </Picker>

                    <Picker
                      selectedValue={auction}
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) =>
                        setAuction(itemValue)
                      }>
                      <Picker.Item label="Select Auction" value="" />
                      <Picker.Item label="Live Auction" value="live" />
                      <Picker.Item label="Upcoming Auction" value="upcoming" />
                    </Picker>

                    <Picker
                      selectedValue={country}
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) =>
                        setCountry(itemValue)
                      }>
                      <Picker.Item label="Select Country" value="" />
                      <Picker.Item label="United States" value="US" />
                      <Picker.Item label="Upcoming Auction" value="upcoming" />
                    </Picker>
                    <TextInput
                      style={styles.textIn}
                      placeholderTextColor={'black'}
                      placeholder={'State, City, Zip, Title, Company ID'}
                    ></TextInput>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => console.log('Search Pressed')}
                      ><Text style={{fontSize:20}}>Search</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#efeff0',
    },
    tinyLogo: {
        flex:0,
        alignSelf: 'flex-start',
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
        height:600
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

export default HomeScreen;