import React, {useState} from "react";
import { useScrollToTop, useTheme } from '@react-navigation/native';
import { View, Container,Text, StyleSheet,FlatList} from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';

const CONTACTS = [
  { type: 'No longer highest bidder', msg: 'You have been outbid on Google, make sure you rebid if you would like to acquire this company.', read: false },
  { type: 'No longer highest bidder', msg: 'You have been outbid on Google, make sure you rebid if you would like to acquire this company.', read: false },
  { type: 'No longer highest bidder', msg: 'You have been outbid on Google, make sure you rebid if you would like to acquire this company.', read: false },
  { type: 'No longer highest bidder', msg: 'You have been outbid on Google, make sure you rebid if you would like to acquire this company.', read: false },
];

function ContactItem(props){
  const { colors } = useTheme();
    return (
      <View style={{flexDirection:'row'}}>
      <View style={[styles.item, { backgroundColor: colors.card }]}>
        <View style={styles.avatar}>
          <Text style={styles.letter}>
            $
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={[styles.name, { color: colors.text }]}>{props.type} </Text>
          <Text style={[styles.number, { color: colors.text, opacity: 0.7 }]}>
            {props.msg}
          </Text>
          {/* <TouchableOpacity style={{flexDirection:'row', backgroundColor: "red", padding: 1, width:50, height:20,marginLeft:25}}><Text style={{textAlign:'center'}}>Delete</Text></TouchableOpacity> */}
        </View>
      </View>
      <View style={{backgroundColor:'red',height:'100%',width:'100%'}}><TouchableOpacity style={{marginLeft:10,marginTop:25}}><Text style={{fontSize:20, color:'white'}}>Delete</Text></TouchableOpacity></View>
      </View>
    );
  };


const ItemSeparator = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.separator, { backgroundColor: colors.border }]} />
  );
};
function NotificationScreen() {

  return (
    <FlatList
      data={CONTACTS}
      keyExtractor={(_, i) => String(i)}
      renderItem={({item}) => <ContactItem type={item.type} msg={item.msg}/>}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#efeff0',
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      width: '82%'
    },
    avatar: {
      height: 36,
      width: 36,
      borderRadius: 18,
      backgroundColor: '#e91e63',
      alignItems: 'center',
      justifyContent: 'center',
    },
    letter: {
      color: 'white',
      fontWeight: 'bold',
    },
    details: {
      margin: 8,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    number: {
      fontSize: 12,
      width: '60%',
    },
    separator: {
      height: StyleSheet.hairlineWidth,
    },
  });

export default NotificationScreen;