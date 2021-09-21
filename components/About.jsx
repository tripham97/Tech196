import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

function AboutUsScreen() {
  console.log("About Us Loaded");
  const handlePress = () => console.log("Text pressed");
  return (
    
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <StatusBar style="auto" />
        <ImageBackground source={require('../assets/about_banner.jpg')} style={styles.image}>
        </ImageBackground>
        <Text style={{color:'#4b74a8',textAlign:'center',fontSize:'25'}}>About Us</Text>
        <Image style={{alignSelf:'center'}} source={require('../assets/sepretor.png')}></Image>
        <Text>TECH196 is an innovative online bidding platform that specializes in expediting the sale of technology companies through auction and brings opportunities to both buyers and sellers with true value for money.  

TECH196 offers various technology companies that include core technology, blockchain, fintech, artificial intelligence, intellectual property, internet of things, etc.  

The ultimate goal of TECH196 is to provide a vast number of investment opportunities at discounted prices to buyers globally while positioning itself as an integral sales tool for those looking to sell tech assets in an accelerated timeframe.  </Text>
        <Text><Text style={{color:'blue'}}>Tips for sellers</Text>{'\n'}

 

Make a great post

The companies that sell fastest on TECH196 have great documents, titles, descriptions, and fair prices. If you’ve already posted your project, but it isn’t selling, try updating, adding documentation/video, or revising it.

 

Best offer = Best price + best buyer

Sometimes an offer really is too good to be true. If a buyer offers full price, but has a low rating, no profile picture, or other red flags, it might not be your best offer. For offers for less money than you want, know that the buyer is trying to negotiate. Let the buyer know it's too low, or just politely decline.

 

Suggest safe and secure transactions

TECH196 is not responsible for the transaction of companies between sellers and buyers. We are the connection platform for buyers to more easily find and acquire companies they desire. Once money has been exchanged for a project, the sale is final. Resolve any questions or issues with the seller before you pay.

 

Get a great rating

When the project sells, mark it sold on TECH196, and rate the buyer. Then they can rate you, so buyers can see you’re good to do business with. Unfortunately, not every sale works out. Even when a sale falls through, be a considerate seller. There are always more buyers. If someone stops responding to you without explanation, report them to TECH196.

 

<Text style={{color:'blue'}}>Tips for buyers</Text>{'\n'}

 

Shop smart

Take a good look at the documents, description, and additional information of the project you’re interested in. Read reviews of the project seller online so you know what to expect.

 

Research the seller

Read the seller’s profile to get to know more about them, see the ratings and badges they’ve earned, and look at their past companies.

 

Negotiate prices

If a project’s price is negotiable, the seller’s reserve price can be considered as a rough guideline. Be fair. If you have an idea of the project's value, make a reasonable offer. Be respectful and open to counteroffers.</Text>
      </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#A89954',
  },
  tinyLogo: {
    flex:0,
    width:200,
    paddingTop: 50,
    marginBottom:50,
    marginTop:100,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    width: 500,
    height: 300
  },
  loginGroup:{ 
    margin: 10,
    paddingTop:0,
    paddingBottom:0,
    flex:1,
    width:300
  },
  subtext:{
    marginBottom:200,
    marginTop:80,
    fontSize:20
  },
  btn:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom:30
  },
  scrollView: {
    backgroundColor: '#efefee',
    marginHorizontal: 0,
  },
});

export default AboutUsScreen;