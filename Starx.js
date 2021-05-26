import React from 'react';
import {FlatList, StyleSheet, Text, TextInput, View } from 'react-native';


const Starx = (props) => {
    return (
        <View>
            <Text style={style.root}>{props.data.name}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    root:{
      margin: 10,
      padding: 10,
      backgroundColor:'red',
      color:'white',
      
      
      fontSize:30
    }
  })

export default Starx;