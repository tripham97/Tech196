import React, {useState} from "react";
import { Image,ImageBackground,ScrollView,Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

const HomeScreen = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);
    return (
        <SafeAreaView style={styles.container}>
        <Image style={styles.tinyLogo} resizeMode={'cover'} source={require("../assets/logo.png")} />
            <ScrollView style={styles.scrollView}>
                <ImageBackground source={require('../assets/splash.png')} style={styles.image}>
                    <Text style={{alignSelf:'center',fontSize:35,width:'auto',}}>World's Leading Startup Auction Platform
                    </Text>
                    <Text style={{alignSelf:'center',fontSize:30,color:'lightgrey',marginTop:30}}>
                    Find your next company here
                    </Text>
                    <DropDownPicker
                        placeholder={'All Sectors'}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        zIndex={3000}
                        zIndexInverse={1000}
                        style={{marginBottom:10}}
                    />
                    <DropDownPicker
                        placeholder={'All Stages'}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        zIndex={2000}
                        zIndexInverse={2000}
                    />
                    <DropDownPicker
                        placeholder={'All Auctions'}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                    <DropDownPicker
                        placeholder={'All Countries'}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                    
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
        height:2000
        //alignItems: 'center',
        //justifyContent: "space-between",
        //width: 1000,
      },
  });

export default HomeScreen;