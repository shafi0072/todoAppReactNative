import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={style.header}>
            <Text style={style.text}>My Todos</Text>

        </View>
    );
};

const style = StyleSheet.create({
    header:{
        height: 80,
        backgroundColor:'coral',
        paddingTop:34,
    },
    text:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
})
export default Header;